import { Input } from "../ui/input";

export const SearchPocketItem = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="search..."
        className="py-5 focus:outline-none  w-full rounded-lg"
      />
    </div>
  );
};
