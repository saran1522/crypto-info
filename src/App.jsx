import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <main className="flex max-md:flex-col h-screen w-full text-slate-700">
        <div className="max-md:hidden w-1/3">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CoinPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
