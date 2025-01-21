import { Pocket } from "@/store/types/pocket.type";
import { SVG } from "@/utils/svg";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { usePocket } from "@/hooks/usePocket";

export const AccordionCard = ({ item }: { item: Pocket }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { DeletePocketItem } = usePocket();
  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (copiedField && copiedField !== field) {
        setCopiedField(null);
      }
      setCopiedField(field);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDelete = (id: string) => {
    DeletePocketItem(id);
  };

  return (
    <div className="w-full space-y-4 pb-4">
      <div className="flex justify-end gap-2">
        <img src={SVG.Edit} alt="" className="w-5 h-5 dark:invert" />
        <img
          src={SVG.Bin}
          alt=""
          className="w-5 h-5 dark:invert cursor-pointer"
          onClick={() => handleDelete(item._id)}
        />
      </div>
      {item.description && (
        <div>
          <small className="dark:text-gray-300">Description</small>
          <div className="relative">
            <Textarea
              value={item.description}
              readOnly
              className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg resize-none"
            />
            <div
              className="absolute cursor-pointer w-max right-5 inset-y-3"
              onClick={() =>
                handleCopy(item.description as string, "description")
              }
            >
              <img
                src={copiedField === "description" ? SVG.Check : SVG.Copy}
                alt="copy_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
          </div>
        </div>
      )}

      {item.pocket_userName && (
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
              value={item.pocket_userName}
              readOnly
              className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
            />
            <div
              className="absolute cursor-pointer w-max right-5 inset-y-3"
              onClick={() =>
                handleCopy(item.pocket_userName as string, "username")
              }
            >
              <img
                src={copiedField === "username" ? SVG.Check : SVG.Copy}
                alt="copy_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
          </div>
        </div>
      )}

      {item.pocket_password && (
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
              value={item.pocket_password}
              readOnly
              className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
            />
            <div
              className="absolute cursor-pointer w-max right-14 inset-y-3"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <img
                src={showPassword ? SVG.EyeOpen : SVG.EyeClose}
                alt="eye_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
            <div
              className="absolute cursor-pointer w-max right-5 inset-y-3"
              onClick={() =>
                handleCopy(item.pocket_password as string, "password")
              }
            >
              <img
                src={copiedField === "password" ? SVG.Check : SVG.Copy}
                alt="copy_icon"
                className="w-5 h-5 dark:invert"
              />
            </div>
          </div>
        </div>
      )}

      {item.images && item.images.length > 0 && (
        <div>
          <small className="dark:text-gray-300">Images</small>
          <div className="flex flex-wrap gap-2">
            {item.images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt="" className="w-24 h-24 rounded-md" />
                <a
                  href={image}
                  download
                  className="absolute -top-2 -right-2 w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600"
                >
                  <img
                    src={SVG.Download}
                    alt="download"
                    className="w-5 h-5 invert"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
