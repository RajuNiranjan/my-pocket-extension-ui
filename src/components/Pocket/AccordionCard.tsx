import { Pocket } from "@/store/types/pocket.type";
import { SVG } from "@/utils/svg";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { usePocket } from "@/hooks/usePocket";
import { Button } from "../ui/button";

export const AccordionCard = ({ item }: { item: Pocket }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { DeletePocketItem, UpdatePocketItem } = usePocket();
  const [formData, setFormData] = useState({
    title: item.title,
    description: item.description || "",
    pocket_userName: item.pocket_userName || "",
    pocket_password: item.pocket_password || "",
    images: item.images || [],
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleUpdate = () => {
    UpdatePocketItem({
      pocketId: item._id,
      formData,
    });
    setIsEditing(false);
  };

  return (
    <div className="w-full space-y-4 pb-4">
      <div className="flex justify-end gap-2">
        <img
          src={isEditing ? SVG.X : SVG.Edit}
          alt=""
          className="w-5 h-5 dark:invert cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        />
        <img
          src={SVG.Bin}
          alt=""
          className="w-5 h-5 dark:invert cursor-pointer"
          onClick={() => handleDelete(item._id)}
        />
      </div>
      {formData.description && (
        <div>
          <small className="dark:text-gray-300">Description</small>
          <div className="relative">
            <Textarea
              name="description"
              value={formData.description}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg resize-none"
            />
            {!isEditing && (
              <div
                className="absolute cursor-pointer w-max right-5 inset-y-3"
                onClick={() => handleCopy(formData.description, "description")}
              >
                <img
                  src={copiedField === "description" ? SVG.Check : SVG.Copy}
                  alt="copy_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {formData.pocket_userName && (
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
              name="pocket_userName"
              type="text"
              value={formData.pocket_userName}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
            />
            {!isEditing && (
              <div
                className="absolute cursor-pointer w-max right-5 inset-y-3"
                onClick={() => handleCopy(formData.pocket_userName, "username")}
              >
                <img
                  src={copiedField === "username" ? SVG.Check : SVG.Copy}
                  alt="copy_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {formData.pocket_password && (
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
              name="pocket_password"
              type={showPassword ? "text" : "password"}
              value={formData.pocket_password}
              readOnly={!isEditing}
              onChange={handleInputChange}
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
            {!isEditing && (
              <div
                className="absolute cursor-pointer w-max right-5 inset-y-3"
                onClick={() => handleCopy(formData.pocket_password, "password")}
              >
                <img
                  src={copiedField === "password" ? SVG.Check : SVG.Copy}
                  alt="copy_icon"
                  className="w-5 h-5 dark:invert"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {formData.images && formData.images.length > 0 && (
        <div>
          <small className="dark:text-gray-300">Images</small>
          <div className="flex flex-wrap gap-2">
            {formData.images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt="" className="w-24 h-24 rounded-md" />
                {isEditing ? (
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <img src={SVG.X} alt="remove" className="w-5 h-5 invert" />
                  </div>
                ) : (
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {isEditing && (
        <div className="flex justify-end">
          <Button
            onClick={handleUpdate}
            className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800"
          >
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};
