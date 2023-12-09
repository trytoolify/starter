"use server";

import { existsSync, promises as fs } from "fs";
import path from "path";

type LayoutItem = {
  x: number;
  y: number;
  w: number;
  h: number;
  id: string;
};

const createFile = async (filename: string) => {
  if (!existsSync(filename)) {
    // @ts-ignore
    await fs.writeFile(filename, JSON.stringify({}), function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
};

type SaveLayoutType = {
  fileName: string;
  items: LayoutItem[];
};
export async function saveLayout({ fileName, items }: SaveLayoutType) {
  const dataFilePath = path.join(process.cwd(), ".creo", "layout.json");

  try {
    //create a file if it doesn't exist
    await createFile(dataFilePath);
    const jsonData = await fs.readFile(dataFilePath);

    const objectData = JSON.parse(jsonData.toString());
    objectData[fileName] = { items };

    const updatedData = JSON.stringify(objectData);
    await fs.writeFile(dataFilePath, updatedData);

    return { message: "Data stored successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Error storing data" };
  }
}

export async function getLayout({ fileName }: { fileName: string }) {
  const dataFilePath = path.join(
    process.env.USER_STARTER_PATH || process.cwd(),
    ".creo",
    "layout.json"
  );

  try {
    //create a file if it doesn't exist
    await createFile(dataFilePath);
    const jsonData = await fs.readFile(dataFilePath);

    const objectData = JSON.parse(jsonData.toString());
    const layout = objectData[fileName];

    if (fileName in objectData) {
      return { items: layout.items };
    } else {
      return { error: "No layout found" };
    }
  } catch (error) {
    console.error(error);
    return { error: "Error storing data" };
  }
}

export async function createAiSession() {
  const headers = new Headers();
  headers.append("Authorization", "rohan.mayya@gmail.com");
  const res = await fetch(
    "https://creo-ai-server-2.onrender.com/create-session",
    {
      cache: "no-store",
      method: "POST",
      headers,
    }
  );

  const data = await res.json();
  console.log(data);
  if ("session_id" in data) {
    return data.session_id;
  }
  return null;
}

export async function getFile({
  sessionId,
  prompt,
  fileName,
}: {
  sessionId: string;
  prompt: string;
  fileName: string;
}) {
  console.log("Getting file", sessionId);
  const cwd = process.cwd();
  const tasksPath = path.join(cwd, "tasks", fileName);
  let file = "";
  if (existsSync(tasksPath)) {
    file = (await fs.readFile(tasksPath)).toString();
  }

  const params = {
    "session-id": sessionId,
    instruction: prompt,
    file,
  };
  const headers = new Headers();
  headers.append("Authorization", "rohan.mayya@gmail.com");
  headers.append("Content-Type", "application/json");
  const res = await fetch("https://creo-ai-server-2.onrender.com/modify-code", {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify(params),
    headers,
  });

  const data = await res.json();
  console.log(data);
  if ("modified_file" in data) {
    saveFile({ fileName, file: data.modified_file });
    return {
      message: `Successfully edited ${fileName}.`,
      data: data.modified_file,
      success: true,
    };
  }
  return { error: "Something went wrong", data };
}

export async function saveFile({
  fileName,
  file,
}: {
  fileName: string;
  file: string;
}) {
  const cwd = process.cwd();
  const tasksPath = path.join(cwd, "tasks", fileName);
  await fs.writeFile(tasksPath, file);
}
