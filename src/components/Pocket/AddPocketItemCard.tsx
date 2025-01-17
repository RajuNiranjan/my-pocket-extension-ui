import React, { useState } from "react";
import { SVG } from "../../utils/svg";
import { usePocket } from "../../hooks/usePocket";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPocketItem({ formData, setShowCard });
  };

  return (
    <div className="w-full h-full">
      {/* Close Button */}
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

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Photo Button */}
          <Button
            type="button"
            className="h-14 w-14 rounded-md flex justify-center items-center bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
          >
            <img src={SVG.Photo} alt="" className="w-5 h-5" />
          </Button>

          {/* Toggle Password Button */}
          <Button
            type="button"
            onClick={() => setIsPassword(!isPassword)}
            className={`h-14 w-14 rounded-md flex justify-center items-center ${
              isPassword
                ? "bg-yellow-300 dark:bg-yellow-500"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
            }`}
          >
            <img src={SVG.Key} alt="" className="w-5 h-5" />
          </Button>

          <Button
            type="button"
            className="h-14 w-14 rounded-md flex justify-center items-center bg-gray-200 dark:bg-gray-700 hover:bg-yellow-300 dark:hover:bg-yellow-500"
          >
            <img src={SVG.Clip} alt="" className="w-5 h-5 dark:invert" />
          </Button>

          <Button
            type="submit"
            className="h-14 w-14 rounded-full flex justify-center items-center bg-yellow-300 dark:bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-600"
          >
            <img src={SVG.Send} alt="" className="w-5 h-5 dark:invert" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPocketItemCard;
