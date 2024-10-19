import { LiaHistorySolid } from "react-icons/lia";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import Tab from "./Tab";

function Tabs() {
  const tabs = [
    {
      title: "Summary",
      icon: LiaHistorySolid,
    },
    {
      title: "Chart",
      icon: AiOutlineLineChart,
    },
    {
      title: "Statistics",
      icon: IoMdStats,
    },
    {
      title: "Links",
      icon: BsLink45Deg,
    },
  ];
  return (
    <div className="flex gap-5">
      {tabs.map((tab) => (
        <Tab key={tab.title} tab={tab} />
      ))}
    </div>
  );
}

export default Tabs;
