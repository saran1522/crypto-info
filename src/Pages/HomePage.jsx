import Sidebar from "../Components/Sidebar";
import { useCryptoStore } from "../store";

function HomePage() {
  const { cryptos } = useCryptoStore();
  if (!cryptos) {
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
    <>
      <div className="max-md:hidden flex justify-center items-center w-full">
        <p className="text-3xl">Click on any Crypto to start</p>
      </div>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </>
  );
}

export default HomePage;
