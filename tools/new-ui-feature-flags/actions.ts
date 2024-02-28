"use server";

import fs from "fs";
import { revalidatePath } from "next/cache";

export async function toggleNewUI(data: any) {
    console.log("In server action [toggleNewUI]");

    try {
        const filePath = process.cwd() + "/public/data/MOCK_DATA_SMALL.json";
        const fileContents = fs.readFileSync(filePath, "utf8");
        const jsonData = JSON.parse(fileContents);

        const idsToToggle = data.map((item: any) => item.id);

        jsonData.forEach((item: any) => {
            if (idsToToggle.includes(item.id)) {
                item.new_ui = !item.new_ui;
            }
        });

        await fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        console.log("UI toggle updated successfully.");

        revalidatePath("/");
    } catch (error) {
        console.error("Error in toggleNewUI:", error);
    }
}

export async function deleteAction(data: any) {
    console.log("In server action [deleteAction]");
    console.log(data);
}
