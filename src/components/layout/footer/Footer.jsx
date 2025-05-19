// components/Footer/Footer.js
import FooterSection from "./widgets/FooterSection";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import FooterCopyright from "./widgets/FooterCopyRight";

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
    <footer className="bg-gray-100 text-black  px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Contact Info */}
        <div>
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={40}
              className="w-[50px] h-[40px] "
            />
            <span className="mr-4 text-xl font-bold text-blue-600">
              Ecommerce
            </span>
          </div>
          <p className="text-sm mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex items-center space-x-2 text-green-400">
            <MdPhone /> <span>+65 11.188.888</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <MdEmail /> <span>ecommerce@gmail.com</span>
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

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
