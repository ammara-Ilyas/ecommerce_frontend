"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CircularProgress from "@mui/material/CircularProgress";
export default function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our products, add items to your cart, proceed to checkout, and complete the payment process.",
    },
    {
      question: "What documents or information do I need to make a purchase?",
      answer:
        "You just need a valid email address and a delivery address. For some purchases, a phone number may be required for delivery updates.",
    },
    {
      question: "Is there an age requirement to shop online?",
      answer:
        "You must be at least 18 years old or have permission from a parent or guardian to place an order.",
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "Yes, you can modify or cancel your order before it is shipped by contacting our customer support team.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, digital wallets (e.g., PayPal, Apple Pay), and other secure online payment methods.",
    },
    {
      question: "Is my order covered under any warranty or protection?",
      answer:
        "Yes, many of our products come with a standard warranty. You can also opt for extended protection plans at checkout.",
    },
    {
      question: "Can I return or exchange an item?",
      answer:
        "Yes, we offer easy returns and exchanges within the specified return window. Please check our return policy for details.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border  transition-all ease-in-out duration-300  rounded-lg"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between transition-all ease-in-out duration-300 items-center p-4 text-black bg-gray-100  rounded-t-lg"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndexes.includes(index) && (
              <div className="p-4 bg-white text-black rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
