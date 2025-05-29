// components/Footer/FooterSection.js
import Link from "next/link";

const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-black text-sm xs:text-xl font-semibold mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-blue-600 text-[10px] xs:text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
