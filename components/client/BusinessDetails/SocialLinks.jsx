import Link from "next/link";

import { BsInstagram } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { BiShareAlt } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: <BsInstagram size="20" />,
    profileLink: "/",
  },
  {
    name: "Facebook",
    icon: <FiFacebook size="20" />,
    profileLink: "/",
  },
  {
    name: "Web",
    icon: <GiEarthAmerica size="20" />,
    profileLink: "/",
  },
  {
    name: "Share",
    icon: <BiShareAlt size="20" />,
    profileLink: "/",
  },
];

export default function SocialLinks() {
  return (
    <div className="py-2">
      <div className="uppercase text-gray-700 text-sm font-bold pb-4">
        Social Media & Share
      </div>
      <div className="flex justify-between">
        {socialPlatforms.map((social) => {
          return (
            <Link href={social.profileLink} key={social.name}>
              <a className="text-gray-700 hover:text-primary-100 font-bold text-xs grid place-items-center gap-2">
                {social.icon}
                {social.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
