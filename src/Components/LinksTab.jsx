import LinkCard from "./LinkCard";
import { MdOutlineForum } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";
import { SiBlockchaindotcom } from "react-icons/si";
import {
  RiGithubFill,
  RiRedditFill,
  RiTwitterXFill,
  RiHome2Line,
} from "react-icons/ri";

function LinksTab({ links }) {
  return (
    <div>
      <ul className="grid grid-rows-4 grid-cols-2 gap-y-8 mt-4 max-md:justify-items-center">
        <LinkCard url={links.homepage[0]} title="Homepage" icon={RiHome2Line} />
        <LinkCard
          url={links.blockchain_site[0]}
          title="Blockchain Site"
          icon={SiBlockchaindotcom}
        />
        <LinkCard
          url={links.official_forum_url[0]}
          title="Official Forum"
          icon={MdOutlineForum}
        />
        <LinkCard
          url={links.repos_url?.github[0]}
          title="Official Repo"
          icon={RiGithubFill}
        />
        <LinkCard
          url={links.subreddit_url}
          title="Subreddit"
          icon={RiRedditFill}
        />
        <LinkCard
          url={`https://web.telegram.org/k/#@${links.telegram_channel_identifier}`}
          title="Telegram"
          icon={LiaTelegramPlane}
        />
        <LinkCard
          url={`https://x.com/${links.twitter_screen_name}`}
          title="Twitter / X"
          icon={RiTwitterXFill}
        />
        <LinkCard
          url={links.whitepaper}
          title="Whitepaper"
          icon={PiNewspaperLight}
        />
      </ul>
      <p className="text-gray-200 md:hidden w-fit mx-auto absolute bottom-4">
        *Please click / tap on link not on icon*
      </p>
    </div>
  );
}

export default LinksTab;
