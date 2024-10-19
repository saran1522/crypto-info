import { useCryptoStore } from "../store";

function ChartDay({ day, label }) {
  const { currDay, setCurrDay } = useCryptoStore();
  return (
    <li
      className={`rounded-md px-2 py-1 hover:text-gray-700 cursor-pointer ${
        currDay === day ? "bg-[#9988fb] text-gray-50" : ""
      }`}
      onClick={() => {
        setCurrDay(day);
      }}
    >
      {label}
    </li>
  );
}

export default ChartDay;
