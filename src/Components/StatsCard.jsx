function StatsCard({ title, value }) {
  return (
    <li className="flex flex-col items-start max-md:items-center gap-1 p-2 rounded-lg">
      <p className="text-[#9288fe] lg:w-full mx-auto text-5xl font-medium">
        {value}
      </p>
      <p className="text-slate-500 text-base">{title}</p>
    </li>
  );
}

export default StatsCard;
