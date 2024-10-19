import { AiOutlineFullscreen } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import ChartDay from "./ChartDay";
import { chartDays } from "../config/chartDays";
import CryptoChart from "./CryptoChart";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { saveAs } from "file-saver";
function ChartTab() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const chartRef = useRef(null);
  const saveCanvas = () => {
    const canvasSave = chartRef.current.canvas;
    canvasSave.toBlob(function (blob) {
      saveAs(blob, "home_price_chart.png");
    });
  };

  return (
    <div>
      <div className="w-full flex justify-between text-gray-400 max-md:flex-col max-md:gap-4">
        <div className="flex w-1/3 max-md:w-full items-center justify-between">
          <div
            className="flex gap-2 p-2 rounded-lg items-center cursor-pointer hover:text-gray-700"
            onClick={() => setIsFullScreen(true)}
          >
            <AiOutlineFullscreen />
            <p className="">Fullscreen</p>
          </div>
          <a
            className="flex gap-2 items-center cursor-pointer hover:text-gray-700"
            onClick={saveCanvas}
          >
            <BsDownload />
            <p>Download</p>
          </a>
        </div>
        <div className="mr-10">
          <ul className="flex gap-4 max-md:gap-1">
            {chartDays.map((day) => (
              <ChartDay key={day.value} day={day.value} label={day.label} />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <CryptoChart chartRef={chartRef} />
      </div>

      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-10 flex justify-center items-center">
          <RxCross2
            size={30}
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-5 cursor-pointer text-red-500"
          />
          <CryptoChart isFull={true} />
        </div>
      )}
    </div>
  );
}

export default ChartTab;
