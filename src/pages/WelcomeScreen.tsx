import { SVG } from "../utils/svg";

const HomeScreen = () => {
  return (
    <div className="h-screen w-full  ">
      <div className="space-y-2">
        <div className="text-center">
          <h1 className="font-semibold text-xl">Welcome to My Pocket!</h1>
          <h6 className="text-xs text-gray-400">
            Your personal space to collect and organize everything that matters.
          </h6>
        </div>
      </div>
      <div>
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

          <div>
            <button className="w-full flex items-center bg-gray-600 text-white justify-center p-2 rounded-lg  gap-2">
              <img src={SVG.Save} alt="" className="w-5 h-5" />
              Start Saving
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

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
