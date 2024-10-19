export const CoinList = (currency = "USD") =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export async function fetchAllCoins() {
  try {
    const response = await fetch(CoinList("usd"));
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleCoin(id) {
  try {
    const response = await fetch(SingleCoin(id));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getHistoricalChart(id, days) {
  try {
    const response = await fetch(HistoricalChart(id, days));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrendingCoins() {
  try {
    const response = await fetch(TrendingCoins("usd"));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
