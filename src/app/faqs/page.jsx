import React from "react";
import FAQAccordion from "@/components/widgets/faqs/FaqQuestions";
export const metadata = {
  title: "FAQs | Ecommerce Help Center",
  description: "Frequently asked questions about shopping, shipping, returns, and more on our ecommerce platform.",
  keywords: "faqs, help, support, returns, shipping, ecommerce questions"
};
const page = () => {
  return (
    <div>
      <h1 className="text-center  font-semibold text-3xl pb-7 pt-10 mt-4 uppercase">
        Why Shop with Us
      </h1>
      <FAQAccordion />
    </div>
  );
};

export default page;
