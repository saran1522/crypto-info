import { useCryptoStore } from "../store";

function Tab({ tab }) {
  const { activeTab, handleAtiveTab } = useCryptoStore();
  const Icon = tab.icon;
  return (
    <div
      className={`text-gray-400 py-2 text-sm flex items-center gap-2 cursor-pointer hover:text-gray-700 max-sm:gap-1 ${
        tab.title === activeTab
          ? "border-b-2 text-[#9988fb] border-[#9988fb]"
          : ""
      }`}
      onClick={() => handleAtiveTab(tab.title)}
    >
      <span className="rounded-full">
        <Icon size={18} className="rounded-full" />
      </span>

      <p>{tab.title}</p>
    </div>
  );
}

export default Tab;
