// components/NewsletterSection.js
import { Facebook, Twitter, Pinterest, Instagram } from "@mui/icons-material";
import { SocialButtons } from "../SocialButtons";
import Icon from "@/components/widgets/contact/Icon";

export default function NewsletterSection() {
  return (
    <div className="bg-gray-50 py-10 px-5 mt-10  md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left content */}
      <div className="flex flex-col gap-3 max-w-md">
        <h2 className="text-xl font-bold text-gray-900">
          Subscribe our Newsletter
        </h2>
        <p className="text-gray-500 text-sm">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
        <div>
          <SocialButtons />
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-l-full border border-gray-300 w-full focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full font-semibold">
            Subscribe
          </button>
        </div>
        <Icon />
        {/* <div className="flex gap-3 justify-center md:justify-start">
          <IconCircle icon={<Facebook fontSize="small" />} />
          <IconCircle icon={<Twitter fontSize="small" />} />
          <IconCircle icon={<Pinterest fontSize="small" />} />
          <IconCircle icon={<Instagram fontSize="small" />} />
        </div> */}
      </div>
    </div>
  );
}

function IconCircle({ icon }) {
  return (
    <div className="w-10 h-10  duration-150 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer">
      {icon}
    </div>
  );
}
