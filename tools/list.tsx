import { Button } from "@trycreo/ui/components";
import { Block } from "@trycreo/core/client";

async function List() {
  const testFetch = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => res.json());
  console.log("testFetch", testFetch);

  const groceryList = [
    "Eggs",
    "Milk",
    "Bread",
    "Cheese",
    "Butter",
    "Apples",
    "Oranges",
    "Bananas",
    "Grapes",
    "Strawberries",
    "Blueberries",
  ];

  return (
    <Block id='list' w={1} h={3}>
      <div className='flex flex-col p-4 px-2 relative'>
        <div className='px-2 mb-2 text-neutral-400 text-xs'> Grocery List </div>

        {groceryList.map((item, index) => {
          return (
            <Button
              key={index}
              className='justify-start w-full'
              variant={"ghost"}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </Block>
  );
}

export default List;
