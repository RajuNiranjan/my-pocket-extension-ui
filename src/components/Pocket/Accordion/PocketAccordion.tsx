import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionCard } from "./AccordionCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Pocket } from "@/store/types/pocket.type";

export const PocketAccordion = () => {
  const { pocketItem } = useSelector((state: RootState) => state.pocket);

  return (
    <div className="bg-white dark:bg-gray-900  rounded-lg shadow-sm">
      <Accordion type="single" collapsible className="space-y-2">
        {pocketItem &&
          Array.isArray(pocketItem) &&
          pocketItem.map((item: Pocket, idx: number) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-gray-300 dark:border-gray-700 rounded-lg data-[state=open]:border-gary-800 dark:data-[state=open]:border-gray-200 transition-all duration-300">
              <AccordionTrigger className="p-4 hover:no-underline overflow-hidden rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 data-[state=open]:bg-gray-200 dark:data-[state=open]:bg-gray-800">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <AccordionCard item={item} />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};
