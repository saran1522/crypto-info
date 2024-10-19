import { create } from "zustand";
import { fetchAllCoins, getHistoricalChart, getSingleCoin } from "./config/api";

export const useCryptoStore = create((set) => ({
  cryptos: [],
  crypto: null,
  activeTab: "Chart",
  currDay: 1,
  chartData: [],
  setCryptos: async () => {
    const data = await fetchAllCoins();
    return set({ cryptos: data });
  },
  setSingleCrypto: async (id) => {
    const data = await getSingleCoin(id);
    return set({ crypto: data });
  },
  getHistoricalChart: async (id, days) => {
    const data = await getHistoricalChart(id, days);
    return set({ chartData: data });
  },
  handleAtiveTab: (title) => {
    return set({ activeTab: title });
  },
  setCurrDay: (day) => {
    return set({ currDay: day });
  },
}));
