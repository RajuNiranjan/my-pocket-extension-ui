import React from "react";
import { SVG } from "../utils/svg";

export const WelcomeCard = () => {
  return (
    <div className="my-10 select-none">
      <div className="grid gap-4  w-full space-y-4 ">
        <div className="bg-gray-100 rounded-lg grid grid-cols-2 gap-3">
          <FeatureItem
            icon={SVG.Link}
            title="Links"
            description="Save important URLs"
          />
          <FeatureItem
            icon={SVG.Photo}
            title="Images"
            description="Store visual content"
          />
          <FeatureItem
            icon={SVG.Document}
            title="Documents"
            description="Keep docs & PDFs"
          />
          <FeatureItem
            icon={SVG.Note}
            title="Notes"
            description="Save text snippets"
          />
        </div>
      </div>
    </div>
  );
};
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1 rounded-lg hover:bg-gray-200 p-4 transition-all duration-300 flex flex-col justify-center items-center">
      <div className="bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center text-blue-600">
        <img src={icon as string} alt="" className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
