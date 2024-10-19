import StatsCard from "./StatsCard";

const formatNumber = (number) => {
  if (number >= 1e9 || number * -1 >= 1e9) {
    return (number / 1e9).toFixed(1) + " B";
  } else if (number >= 1e6 || number * -1 >= 1e6) {
    return (number / 1e6).toFixed(1) + " M";
  } else if (number >= 1e3 || number * -1 >= 1e3) {
    return (number / 1e3).toFixed(1) + " k";
  } else {
    return number.toString();
  }
};

function StatisticsTab({ name, stats }) {
  return (
    <div>
      <ul className="grid grid-cols-3 max-md:grid-cols-1 max-md:justify-items-center mt-6 gap-12 max-md:gap-10">
        <StatsCard
          title="Market Cap Rank"
          value={formatNumber(stats.market_cap_rank)}
        />
        <StatsCard
          title="Market Cap Price"
          value={`$${formatNumber(stats.market_cap?.usd)}`}
        />
        <StatsCard
          title="Market Cap Change 24h"
          value={`$${formatNumber(Math.floor(stats.market_cap_change_24h))}`}
        />
        <StatsCard
          title="Total Supply"
          value={formatNumber(Math.floor(stats.total_supply))}
        />
        <StatsCard
          title="Circulating Supply"
          value={formatNumber(Math.floor(stats.circulating_supply))}
        />
        <StatsCard
          title="Total Volume"
          value={`$${formatNumber(stats.total_volume?.usd)}`}
        />
      </ul>
    </div>
  );
}

export default StatisticsTab;
