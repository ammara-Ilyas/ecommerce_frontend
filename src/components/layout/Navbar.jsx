"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { MdPerson, MdSecurity, MdLogout } from "react-icons/md";
import { socialIcons } from "../widgets/contact/Icon";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";

// ////////////import images/////////////////
import {
  FaUser,
  FaHeart,
  FaBars,
  FaTimes,
  FaShoppingBag,
  FaAngleDown,
  FaPhoneAlt,
} from "react-icons/fa";
const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "shop",
    link: "shop/",
  },
  {
    name: "contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const wishListItems = useSelector((state) => state.wish.wishList);
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null); // <-- user state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px se zyada scroll pe stick
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //   const cartItems: Product[] = useSelector(
  //     (state: { cart: { items: Product[] } }) => state.cart.items
  //   );
  // console.log("cart", cartItem.length(), "wish", wishListItems.length());

  const cartIcons = [
    { icon: <FaHeart />, link: "/wishlist", num: wishListItems.length || 0 },
    { icon: <FaShoppingBag />, link: "/cart", num: cartItem?.length || 0 },
  ];
  const account = [
    {
      name: "My Account",
      link: "/contact/account",
      icon: <MdPerson size={20} />,
    },
    {
      name: "Change Password",
      link: "/contact/account",
      icon: <MdSecurity size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  return (
    <>
      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black border-4 w-full bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <header
        className={`${
          isScrolled ? "fixed top-0 left-0 w-full shadow-md z-50 bg-white" : ""
        } transition-all duration-300 py-2 sm:py-3`}
      >
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={40}
                className="sm:w-[50px] w-[40px] h-[30px] sm:h-[40px]"
              />
              <span className=" text-[16px] sm:text-xl font-bold text-blue-600">
                Ecommerce
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-4">
                {navlinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="text-black text-xl capitalize duration-200 active:text-blue-700 hover:text-blue-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cart & User (only visible in medium) */}
            <div className="hidden md:flex items-center space-x-2">
              {cartIcons.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="relative border-2 p-2 text-xl"
                >
                  {item.icon}
                  <span className="absolute top-0 left-4 text-xs bg-red-600 text-white rounded-full px-1">
                    {item.num && item.num}
                  </span>
                </Link>
              ))}

              {/* User/Login */}
              <div
                className="relative items-center justify-between flex space-x-1 cursor-pointer w-[190px] text-xl"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {user ? (
                  <div className="flex items-center space-x-2">
                    {user.img ? (
                      <Avatar alt={user.name} src={user.img} />
                    ) : (
                      <Avatar sx={{ bgcolor: blue[800] }}>
                        {Array.from(user.name)[0]}
                      </Avatar>
                    )}
                    <div>
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                ) : (
                  <span className="text-xl flex gap-2 flex-row">
                    <FaUser />
                    Login
                  </span>
                )}
                {isOpen && (
                  <ul className="absolute flex flex-col gap-2 w-[190px] bg-white z-50 py-3 border rounded-md shadow-md top-10 left-0">
                    {account.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all"
                      >
                        <span className="text-gray-700">{item.icon}</span>
                        <Link
                          href={item.link}
                          className="text-sm text-gray-800"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    {!user ? (
                      <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all text-sm text-gray-800">
                        <Link
                          className="flex items-center gap-3"
                          href="/contact/login"
                        >
                          <FaUser size={20} className="text-gray-700" /> Login
                        </Link>
                      </li>
                    ) : (
                      <li
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all text-sm text-gray-800"
                        onClick={handleLogout}
                      >
                        <MdLogout size={20} className="text-gray-700" />
                        Logout
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-lg md:text-2xl ml-2"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Nav */}
      <div
        className={`fixed top-0 left-0 pl-4 h-full w-[75%] bg-white z-50 flex flex-col  gap-5 pt-3 px-5 shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex  justify-between items-center mt-5 mb-6">
          <Link href="/" className="flex items-center border-b space-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={40}
              className="w-[50px] h-[40px]"
            />
            <span className="text-xl font-bold text-blue-600">Ecommerce</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex w-full flex-col border-4 gap-4">
          {navlinks.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="text-black text-lg border-b w-full capitalize hover:text-blue-600"
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden border-2 relative  flex items-center space-x-2">
          {cartIcons.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="relative border-2 p-2 text-xl"
            >
              {item.icon}
              <span className="absolute top-0 left-4 text-xs bg-red-600 text-white rounded-full px-1">
                {item.num && item.num}
              </span>
            </Link>
          ))}

          {/* User/Login */}
          <div
            className=" items-center justify-between flex space-x-1 cursor-pointer w-[190px] text-xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {user ? (
              <div className="flex items-center space-x-2">
                {user.img ? (
                  <Avatar alt={user.name} src={user.img} />
                ) : (
                  <Avatar sx={{ bgcolor: blue[800] }}>
                    {Array.from(user.name)[0]}
                  </Avatar>
                )}
                <div>
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            ) : (
              <span className="text-xl flex gap-2 flex-row">
                <FaUser />
                Login
              </span>
            )}
            {isOpen && (
              <ul className="absolute flex flex-col gap-2 bg-white z-50 py-3 border rounded-md shadow-md right-0 top-0">
                {account.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all"
                  >
                    <span className="text-gray-700">{item.icon}</span>
                    <Link href={item.link} className="text-sm text-gray-800">
                      {item.name}
                    </Link>
                  </li>
                ))}
                {!user ? (
                  <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all text-sm text-gray-800">
                    <FaUser size={20} className="text-gray-700" /> Login
                  </li>
                ) : (
                  <li
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all text-sm text-gray-800"
                    onClick={handleLogout}
                  >
                    <MdLogout size={20} className="text-gray-700" />
                    Logout
                  </li>
                )}
              </ul>
            )}
          </div>
          {/* Phone Section */}
        </div>
        <div className="xl:hidden flex items-center gap-4">
          <div className="p-3 bg-gray-200 rounded-full group hover:bg-blue-500 duration-200">
            <FaPhoneAlt className="text-blue-500 group-hover:text-white transition" />
          </div>
          <div className="text-sm sm:text-base">
            <h5 className="font-semibold">+65 11.188.888</h5>
            <span className="text-gray-600">Support 24/7 time</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
