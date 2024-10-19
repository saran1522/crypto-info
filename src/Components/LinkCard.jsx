function LinkCard({ url, title, icon: Icon }) {
  if (!url) return null;
  return (
    url && (
      <li className="flex items-center gap-2 max-md:flex-col">
        <span className="p-1.5 bg-[#f4f3fb] rounded-full">
          <Icon
            size={30}
            className="bg-[#e8e6fe] font-light text-[#a39afe] p-1 rounded-full"
          />
        </span>
        <a href={url} target="_blank" className="hover:text-[#a39afe]">
          {title}
        </a>
      </li>
    )
  );
}

export default LinkCard;
