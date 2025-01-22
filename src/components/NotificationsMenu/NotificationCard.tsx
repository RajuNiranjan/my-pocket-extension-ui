import { SVG } from "@/utils/svg";

export const NotificationCard = () => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg cursor-pointer border dark:border-gray-700">
      <div>
        <img
          src={SVG.User}
          alt="User"
          className="w-10 h-10 rounded-full dark:invert"
        />
      </div>
      <div>
        <h1 className="font-medium text-gray-900 dark:text-gray-100">
          John Doe
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};
