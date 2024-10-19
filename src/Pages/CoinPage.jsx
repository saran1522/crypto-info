import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCryptoStore } from "../store";
import CryptoCard from "../Components/CryptoCard";
import Tabs from "../Components/Tabs";
import ChartTab from "../Components/ChartTab";
import SummaryTab from "../Components/SummaryTab";
import StatisticsTab from "../Components/StatisticsTab";
import LinksTab from "../Components/LinksTab";

function CoinPage() {
  const { id } = useParams();
  const { setSingleCrypto, crypto, activeTab } = useCryptoStore();
  useEffect(() => {
    setSingleCrypto(id);
  }, [id]);
  crypto && console.log("crs: ", crypto);
  let profit = crypto?.price_change_24h >= 0;

  if (!id || !crypto) {
    return (
      <div className="flex justify-center max-md:h-screen items-center w-full">
        <p className="text-3xl w-1/2 max-md:w-2/3">
          Please try again in some time. Everyting is working fine but the API
          has a rate-limit. Please refresh after 10-15 seconds
        </p>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-4 py-2 h-full overflow-auto">
      <div className="lg:px-8">
        <CryptoCard
          id={crypto?.id}
          url={crypto?.image.large}
          name={crypto?.name}
        ></CryptoCard>
      </div>
      <div className="px-14 max-md:px-6 flex flex-col gap-4">
        <div>
          <div className="w-full flex items-start gap-2 font-semibold">
            <p className="text-6xl ">
              {crypto?.market_data?.current_price?.usd}
            </p>
            <p className="flex flex-col justify-between text-sm gap-2 h-full pt-2">
              <span className="text-gray-400">USD</span>
              <span className={`${profit ? "text-green-500" : "text-red-500"}`}>
                {`${
                  profit ? "+" : ""
                } ${crypto?.market_data?.price_change_24h.toFixed(2)}`}
              </span>
            </p>
          </div>
          <span>{crypto?.ath_change_percentage?.usd}</span>
        </div>
        <Tabs />
        <div className="text-base">
          {activeTab === "Summary" && (
            <SummaryTab description={crypto?.description.en} />
          )}
          {activeTab === "Chart" && <ChartTab />}
          {activeTab === "Statistics" && (
            <StatisticsTab name={crypto?.name} stats={crypto?.market_data} />
          )}
          {activeTab === "Links" && <LinksTab links={crypto.links} />}
        </div>
      </div>
    </div>
  );
}

export default CoinPage;
