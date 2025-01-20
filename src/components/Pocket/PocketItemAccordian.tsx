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
import { usePocket } from "@/hooks/usePocket";

export const PocketItemAccordion = () => {
  const { pocketItem } = useSelector((state: RootState) => state.pocket);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<string | null>(null);

  const { DeletePocketItem } = usePocket();

  const handleAccordionChange = (value: string) => {
    setActiveAccordion((prev) => (prev === value ? null : value));
  };

  return (
    <div>
      {Array.isArray(pocketItem) ? (
        pocketItem.map((item, idx) => (
          <Accordion
            key={idx}
            type="single"
            collapsible
            value={
              activeAccordion === `item-${idx}` ? `item-${idx}` : undefined
            }
            className="border dark:border-gray-700 rounded-lg my-2 transition-all duration-300"
            onValueChange={() => handleAccordionChange(`item-${idx}`)}
          >
            <AccordionItem value={`item-${idx}`}>
              <AccordionTrigger
                className={`${
                  activeAccordion === `item-${idx}`
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "bg-inherit"
                } p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300`}
              >
                <span className="dark:text-white">{item.title}</span>
              </AccordionTrigger>
              <AccordionContentWithHeight
                isActive={activeAccordion === `item-${idx}`}
              >
                <div className="flex justify-end items-center gap-4 my-2">
                  <img
                    src={SVG.Edit}
                    alt=""
                    className="w-5 h-5 cursor-pointer dark:invert"
                    onClick={() => setEditMode(`item-${idx}`)}
                  />
                  <img
                    src={SVG.Bin}
                    alt=""
                    className="w-5 h-5 cursor-pointer dark:invert"
                    onClick={() => DeletePocketItem(item._id)}
                  />
                </div>
                <AccordionCard
                  item={item}
                  isEditing={editMode === `item-${idx}`}
                  onFinishEdit={() => setEditMode(null)}
                />
              </AccordionContentWithHeight>
            </AccordionItem>
          </Accordion>
        ))
      ) : (
        <div className="dark:text-white">No items available.</div>
      )}
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
      }}
    >
      {children}
    </div>
  );
}

function AccordionCard({
  item,
  isEditing,
  onFinishEdit,
}: {
  item: Pocket;
  isEditing: boolean;
  onFinishEdit: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [copy, setCopy] = useState(false);
  const [formData, setFormData] = useState({
    description: item.description,
    pocket_userName: item.pocket_userName,
    pocket_password: item.pocket_password,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated form data:", formData);
    onFinishEdit();
  };

  return (
    <div className="w-full space-y-4 pb-4">
      <div>
        <small className="dark:text-gray-300">Description</small>
        <div className="relative">
          <Textarea
            value={formData.description}
            readOnly={!isEditing}
            onChange={(e) => handleChange("description", e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg resize-none"
          />
          {!isEditing && (
            <div
              className="absolute cursor-pointer w-max right-5 inset-y-3"
              onClick={() => setCopy((prev) => !prev)}
            >
              <img
                src={copy ? SVG.Check : SVG.Copy}
                alt="eye_close_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
          )}
        </div>
      </div>

      {(item.pocket_password || item.pocket_userName) && (
        <>
          <div>
            <small className="dark:text-gray-300">Username</small>
            <div className="relative">
              <div className="absolute w-max inset-y-3 inset-x-2">
                <img
                  src={SVG.User}
                  alt="lock_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
              <Input
                type="text"
                value={formData.pocket_userName}
                readOnly={!isEditing}
                onChange={(e) =>
                  handleChange("pocket_userName", e.target.value)
                }
                className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
              />
              {!isEditing && (
                <div
                  className="absolute cursor-pointer w-max right-5 inset-y-3"
                  onClick={() => setCopy((prev) => !prev)}
                >
                  <img
                    src={copy ? SVG.Check : SVG.Copy}
                    alt="eye_close_icon"
                    className="w-5 h-5 dark:invert"
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <small className="dark:text-gray-300">Password</small>
            <div className="relative">
              <div className="absolute w-max inset-y-3 inset-x-2">
                <img
                  src={SVG.Lock}
                  alt="lock_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                value={formData.pocket_password}
                readOnly={!isEditing}
                onChange={(e) =>
                  handleChange("pocket_password", e.target.value)
                }
                className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
              />
              <div
                className="absolute cursor-pointer w-max right-14 inset-y-3"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img
                  src={showPassword ? SVG.EyeOpen : SVG.EyeClose}
                  alt="eye_close_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
              {!isEditing && (
                <div
                  className="absolute cursor-pointer w-max right-5 inset-y-3"
                  onClick={() => setCopy((prev) => !prev)}
                >
                  <img
                    src={copy ? SVG.Check : SVG.Copy}
                    alt="eye_close_icon"
                    className="w-5 h-5 dark:invert"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {/* Move save button outside the conditional rendering */}
      {isEditing && (
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 px-4 py-2 rounded-lg text-black dark:text-white"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
