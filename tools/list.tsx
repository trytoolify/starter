import Button from "@/components/button";
import { Block } from "@trycreo/ui/components";

async function List() {
  return (
    <>
      <Block id='list' w={1} h={3}>
        <div className='border bg-background w-full rounded-xl overflow-hidden'>
          <div className='flex flex-col p-4 px-2 w-full styled-scrollbar overflow-y-auto relative'>
            <div className='px-2 mb-2 text-neutral-400 text-xs'>
              {" "}
              Grocery List{" "}
            </div>

            <Button> Eggs </Button>
            <Button> Milk </Button>
            <Button> Bread </Button>
            <Button> Cheese </Button>
            <Button> Butter </Button>
            <Button> Apples </Button>
            <Button> Oranges </Button>
            <Button> Bananas </Button>
            <Button> Grapes </Button>
            <Button> Strawberries </Button>
            <Button> Blueberries </Button>
          </div>{" "}
        </div>
      </Block>
    </>
  );
}

export default List;
