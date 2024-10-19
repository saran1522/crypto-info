import { useEffect, useState } from "react";
import { useCryptoStore } from "../store";
import CryptoCard from "./CryptoCard";

function Sidebar() {
  const [query, setQuery] = useState("");
  const { cryptos, setCryptos } = useCryptoStore((state) => state);
  let filteredCryptos = cryptos;
  if (query !== "") {
    filteredCryptos = filteredCryptos?.filter((cryptos) =>
      cryptos?.name?.toLowerCase().includes(query.toLowerCase())
    );
  }
  useEffect(() => {
    setCryptos();
  }, []);

  return (
    <div className="flex flex-col h-full p-3 items-center border-r border-gray-300">
      <input
        type="text"
        className=" mx-5 w-full border border-gray-400 rounded-xl py-2 px-2 bg-transparent focus-visible:outline-none"
        placeholder="Search Crypto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="md:hidden text-gray-300">Click on any Crypto to start</p>
      <div className="h-auto overflow-auto">
        {filteredCryptos?.map((crypto) => (
          <div key={crypto.id}>
            <CryptoCard id={crypto.id} url={crypto.image} name={crypto.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
