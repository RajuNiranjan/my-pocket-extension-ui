import React, { useState } from "react";
import { SVG } from "../../utils/svg";
import { usePocket } from "../../hooks/usePocket";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";

interface AddPocketItemCardType {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddPocketType {
  title: string;
  description: string;
  pocket_userName: string;
  pocket_password: string;
}

const AddPocketItemCard = ({ setShowCard }: AddPocketItemCardType) => {
  const { addPocketItem } = usePocket();

  const [isPassword, setIsPassword] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pocket_userName: "",
    pocket_password: "",
    images: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        if (file.type.startsWith("image/")) {
          const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
          const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
          try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            const response = await axios.post(
              `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
              formData
            );

            if (response.status === 200) {
              const imageUrl = response.data.secure_url;
              uploadedUrls.push(imageUrl);
              console.log("Upload successful:", imageUrl);
            }
          } catch (error) {
            console.error(`Failed to upload ${file.name}:`, error);
          }
        } else {
          console.warn(`File ${file.name} is not an image and was skipped`);
        }
      }

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls],
      }));
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPocketItem({ formData, setShowCard });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-end">
        <div
          onClick={() => setShowCard(false)}
          className="h-7 w-7 cursor-pointer rounded-full flex justify-center items-center bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
        >
          <img src={SVG.X} alt="" className="w-5 h-5 dark:invert" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-white">Title</label>

          <div className="relative">
            <div className="absolute w-max inset-y-3 inset-x-2">
              <img
                src={SVG.Tag}
                alt="lock_icon"
                className="w-5 h-5 dark:invert dark:bg-white"
              />
            </div>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
            />
          </div>
        </div>

        {!isPassword && (
          <div className="space-y-2">
            <label className="text-sm font-medium dark:text-white">
              Description
            </label>
            <Textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="p-2 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg"
            ></Textarea>
          </div>
        )}

        {isPassword && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-white">
                User Name
              </label>

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
                  name="pocket_userName"
                  placeholder="User Name"
                  value={formData.pocket_userName}
                  onChange={handleInputChange}
                  className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-white">
                Password
              </label>

              <div className="relative">
                <div className="absolute w-max inset-y-3 inset-x-2">
                  <img
                    src={SVG.Lock}
                    alt="lock_icon"
                    className="w-5 h-5 dark:invert"
                  />
                </div>
                <Input
                  type="text"
                  name="pocket_password"
                  placeholder="Password"
                  value={formData.pocket_password}
                  onChange={handleInputChange}
                  className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg px-10"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {formData.images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt="" className="w-14 h-14 rounded-md" />
              <div
                onClick={() => handleRemoveImage(index)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
              >
                <img src={SVG.X} alt="remove" className="w-3 h-3 invert" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Button
              type="button"
              className="h-14 w-14 rounded-md flex justify-center items-center bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
              onClick={() => document.getElementById("imageUpload")?.click()}
            >
              <img src={SVG.Photo} alt="" className="w-9 h-9 dark:invert" />
            </Button>

            <Input
              type="file"
              id="imageUpload"
              accept=".png"
              multiple
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <Button
            type="button"
            onClick={() => setIsPassword(!isPassword)}
            className={`h-14 w-14 rounded-md flex justify-center items-center ${
              isPassword
                ? "bg-yellow-300 dark:bg-yellow-500"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
            }`}
          >
            <img src={SVG.Key} alt="" className="w-9 h-9 dark:invert" />
          </Button>

          <Button
            type="button"
            className="h-14 w-14 rounded-md flex justify-center items-center bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
          >
            <img src={SVG.Clip} alt="" className="w-9 h-9 dark:invert" />
          </Button>

          <Button
            type="submit"
            className="h-14 w-14 rounded-full flex justify-center items-center bg-yellow-300 dark:bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-600"
          >
            <img src={SVG.Send} alt="" className="w-5 h-5 " />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPocketItemCard;
