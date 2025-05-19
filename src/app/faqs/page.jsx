import React from "react";
import FAQAccordion from "@/components/widgets/faqs/FaqQuestions";
export const metadata = {
  title: "Faqs",
  description: "Faqs page of ecommerce dashboard",
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
