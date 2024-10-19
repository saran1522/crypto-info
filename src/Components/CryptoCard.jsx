import { useNavigate } from "react-router-dom";

function CryptoCard({ id, url, name }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex gap-8 hover:bg-gray-100 items-center cursor-pointer p-3 border-b"
      onClick={() => navigate(`/${id}`)}
    >
      <img src={url} alt="" className="h-10 rounded-full" />

      <p className="text-lg">{name}</p>
    </div>
  );
}

export default CryptoCard;
