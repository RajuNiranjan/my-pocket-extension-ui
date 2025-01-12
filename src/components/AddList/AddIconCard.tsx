import { SVG } from "../../utils/svg";

const AddCardData = [
  {
    title: "Notes",
    icon: SVG.Note,
    desc: "Save text snippets",
  },
  {
    title: "Link",
    icon: SVG.Link,
    desc: "Save important URLs",
  },
  {
    title: "Images",
    icon: SVG.Photo,
    desc: "Store visual contant",
  },
  {
    title: "Documents",
    icon: SVG.Document,
    desc: "Keep docs & PDFs",
  },
];

export const AddIconCard = () => {
  return (
    <>
      {AddCardData.map((item, idx) => (
        <div
          key={idx}
          className="w-32 h-20 border rounded-lg p-2 bg-yellow-50 border-yellow-200 space-y-1 hover:bg-yellow-100 transition-all duration-300">
          <div className="flex justify-between items-center">
            <img src={item.icon} alt="" className="w-5 h-5" />{" "}
            <small className="h-5 w-5 bg-yellow-300 flex justify-center items-center rounded-full font-medium">
              2
            </small>
          </div>
          <p className="text-sm font-medium">{item.title}</p>
          <small className="text-xs text-gray-400">{item.desc}</small>
        </div>
      ))}
    </>
  );
};
