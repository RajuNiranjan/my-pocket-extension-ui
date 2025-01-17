import { Input } from "../ui/input";

export const SearchPocketItem = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="search..."
        className="py-5 border dark:border-gray-700 dark:bg-gray-800 dark:text-white w-full rounded-lg"
      />
    </div>
  );
};
