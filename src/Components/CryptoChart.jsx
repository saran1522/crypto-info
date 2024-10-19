import { useEffect } from "react";
import { useCryptoStore } from "../store";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function CryptoChart({ chartRef, isFull = false }) {
  const { chartData, currDay, getHistoricalChart } = useCryptoStore();
  const id = useCryptoStore((state) => state.crypto.id);
  chartData && console.log("chart: ", chartData?.prices);

  useEffect(() => {
    getHistoricalChart(id, currDay);
  }, [id, currDay]);

  if (!chartData) {
    return (
      <p className="h-full w-full mx-auto mt-10 flex justify-center items-center">
        API RATE LIMIT! Please refresh or go to another day after 10-15 seconds
      </p>
    );
  }

  return (
    chartData && (
      <div className={`${isFull ? "h-screen" : "h-[400px]"} w-full pt-6 `}>
        <Line
          ref={chartRef}
          data={{
            labels: chartData?.prices?.map((hData) => {
              let date = new Date(hData[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return currDay === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price ( Past ${currDay} Days ) in $`,
                data: chartData?.prices?.map((hData) => hData[1]),
                borderColor: "#9988fb",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    )
  );
}

export default CryptoChart;
