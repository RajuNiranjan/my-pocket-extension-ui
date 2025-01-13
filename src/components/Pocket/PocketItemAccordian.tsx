import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";
import { Pocket } from "@/store/types/pocket.type";

export const PocketItemAccordian = () => {
  const { pocketItem } = useSelector((state: RootState) => state.pocket);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleAccordionChange = (value: string) => {
    setActiveAccordion((prev) => (prev === value ? null : value));
  };

  return (
    <div>
      {pocketItem.map((item, idx) => (
        <Accordion
          key={idx}
          type="single"
          collapsible
          value={activeAccordion === `item-${idx}` ? `item-${idx}` : undefined}
          className="border rounded-lg my-2 transition-all duration-300"
          onValueChange={() => handleAccordionChange(`item-${idx}`)}>
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger
              className={`${
                activeAccordion === `item-${idx}` ? "bg-gray-200" : "bg-inherit"
              } p-4 hover:bg-gray-100 transition-all duration-300`}>
              {item.title}
            </AccordionTrigger>
            <AccordionContentWithHeight
              isActive={activeAccordion === `item-${idx}`}>
              <AccordianCard item={item} />
            </AccordionContentWithHeight>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

function AccordionContentWithHeight({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref, isActive]);

  return (
    <div
      ref={ref}
      style={{
        maxHeight: isActive ? `${height}px` : "0px",
        transition: "max-height 0.5s ease-in-out",
        overflow: "hidden",
        padding: "0 6px 0 6px",
      }}>
      {children}
    </div>
  );
}

function AccordianCard({ item }: { item: Pocket }) {
  return (
    <div className="w-full py-4">
      <div>
        <small>Description</small>
        <Input
          type="text"
          value={item.description}
          readOnly
          className="w-full"
        />
      </div>

      {item.pocket_password && item.pocket_userName && (
        <>
          <small>Password</small>
          <div>
            <small>Username</small>
            <Input
              type="text"
              value={item.pocket_userName}
              readOnly
              className="w-full"
            />
          </div>
          <div>
            <small>Password</small>
            <Input
              type="text"
              value={item.pocket_password}
              readOnly
              className="w-full"
            />
          </div>
        </>
      )}
    </div>
  );
}
