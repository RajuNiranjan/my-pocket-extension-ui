import { SVG } from "@/utils/svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotificationCard } from "./NotificationCard";

export const NotificationsMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="">
          <div className="relative ">
            <img
              src={SVG.Bell}
              alt="Notifications"
              className="w-5 h-5 cursor-pointer dark:invert"
            />
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-yellow-300 dark:bg-yellow-500 flex justify-center items-center rounded-full font-medium">
              <small className="text-black ">3</small>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white dark:bg-gray-900 border">
          <DropdownMenuLabel>New Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <NotificationCard />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
