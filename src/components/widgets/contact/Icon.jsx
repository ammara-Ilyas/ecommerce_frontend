import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";

export const socialIcons = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaPinterestP />,
    link: "https://www.facebook.com/",
  },
];
const Icon = () => {
  return (
    <ul className="flex items-center gap-2 mt-5">
      {socialIcons.map((item, i) => (
        <li
          key={i}
          className="border-none bg-white p-3 rounded-full group hover:bg-blue-600 duration-200"
        >
          <Link href={item.link}>
            <span className="group-hover:rotate-180 group-hover:text-white duration-500">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Icon;
