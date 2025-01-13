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
import { SVG } from "@/utils/svg";
import { Textarea } from "../ui/textarea";

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
              <div className="flex justify-end items-center my-2">
                <img src={SVG.Ellips} alt="" className="w-5 h-5" />
              </div>
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
  const [showPassword, setShowPassword] = useState(false);
  const [copy, setCopy] = useState(false);
  return (
    <div className="w-full pb-4">
      <div>
        <small>Description</small>
        <div className="relative">
          <Textarea
            value={item.description}
            readOnly
            className="border w-full rounded-lg resize-none"
          />
          <div
            className="absolute cursor-pointer w-max right-5 inset-y-3"
            onClick={() => setCopy((prev) => !prev)}>
            <img
              src={copy ? SVG.Check : SVG.Copy}
              alt="eye_close_icon"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>

      {item.pocket_password && item.pocket_userName && (
        <>
          <div>
            <small>Username</small>

            <div className="relative">
              <div className="absolute w-max inset-y-3 inset-x-2">
                <img src={SVG.User} alt="lock_icon" className="w-5 h-5" />
              </div>
              <Input
                type="text"
                value={item.pocket_userName}
                readOnly
                className="py-5 border w-full rounded-lg px-10"
              />
              <div
                className="absolute cursor-pointer w-max right-5 inset-y-3"
                onClick={() => setCopy((prev) => !prev)}>
                <img
                  src={copy ? SVG.Check : SVG.Copy}
                  alt="eye_close_icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <div>
            <small>Password</small>
            <div className="relative">
              <div className="absolute w-max inset-y-3 inset-x-2">
                <img src={SVG.Lock} alt="lock_icon" className="w-5 h-5" />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                value={item.pocket_password}
                readOnly
                className="py-5 border w-full rounded-lg px-10"
              />
              <div
                className="absolute cursor-pointer w-max right-14 inset-y-3"
                onClick={() => setShowPassword((prev) => !prev)}>
                <img
                  src={showPassword ? SVG.EyeOpen : SVG.EyeClose}
                  alt="eye_close_icon"
                  className="w-5 h-5"
                />
              </div>
              <div
                className="absolute cursor-pointer w-max right-5 inset-y-3"
                onClick={() => setCopy((prev) => !prev)}>
                <img
                  src={copy ? SVG.Check : SVG.Copy}
                  alt="eye_close_icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
