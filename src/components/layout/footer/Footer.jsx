// components/Footer/Footer.js
import FooterSection from "./widgets/FooterSection";

import {
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const sections = [
  {
    title: "My Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Order History", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Shopping Cart", href: "/cart" },
    ],
  },
  {
    title: "Helps",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Proxy",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Shop", href: "/shop" },
      { label: "Product", href: "/product" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Category",
    links: [
      { label: "Fruit and Vegetables", href: "/category/fruit-vegetables" },
      { label: "Meat and Fish", href: "/category/meat-fish" },
      { label: "Bread and Bakery", href: "/category/bread-bakery" },
      { label: "Beauty and Personal Care", href: "/category/beauty-care" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Contact Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="Ecobazar Logo" className="h-6" />
            <span className="text-white text-xl font-semibold">Ecobazar</span>
          </div>
          <p className="text-sm mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex items-center space-x-2 text-green-400">
            <MdPhone /> <span>(219) 555-0114</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <MdEmail /> <span>Proxy@gmail.com</span>
          </div>
        </div>

        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-400">
          Ecobazar eCommerce © 2025. All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaApplePay className="text-white text-xl" />
          <FaCcVisa className="text-white text-xl" />
          <FaCcDiscover className="text-white text-xl" />
          <FaCcMastercard className="text-white text-xl" />
          <RiSecurePaymentLine className="text-white text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
