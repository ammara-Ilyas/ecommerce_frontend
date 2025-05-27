"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import ReviewList from "./ReviewList";
import AddReviewForm from "./AddReviewForm";

const ProductAdditionalDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Description" },
    { key: "additional", label: "Additional Info" },
    { key: "reviews", label: "Reviews (2)" },
  ];

  const additionalInfo = [
    { label: "Brand", value: "IZTOSS (View more from IZTOSS)" },
    { label: "Model Number", value: "IZTOSS-FG-1212-TWZ1234" },
    { label: "Color", value: "Black, Blue, Red, White" },
    { label: "Size", value: "1/2" },
    { label: "Item", value: "Wrench" },
    { label: "Weight Capacity", value: "2200LB" },
    { label: "Material", value: "Alloy Steel" },
    { label: "Handle Height (ground to handle)", value: "22 inch" },
    { label: "Handle Height (ground to top)", value: "29 inch" },
  ];

  return (
    <div className="p-4 bg-purple-50 px-10 py-5 rounded-lg">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "contained" : "outlined"}
            onClick={() => setActiveTab(tab.key)}
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:active": {
                backgroundColor: "#d32f2f", // darker red for click
                transform: "scale(0.97)", // slight shrink on click
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded border p-4">
        {activeTab === "description" && (
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quas
            veritatis. Deleniti error est earum rem dolore aspernatur impedit?
            Ipsa quibusdam, maiores laudantium, nam, at itaque consequatur
            blanditiis sed placeat nemo ad accusantium vero architecto modi et.
            Exercitationem voluptatibus similique sapiente itaque. Delectus
            assumenda tempore est consequatur praesentium laboriosam dolorum.
          </p>
        )}

        {activeTab === "additional" && (
          <table className="w-full text-sm text-left border border-gray-200">
            <tbody>
              {additionalInfo.map((item, idx) => (
                <tr key={idx} className="even:bg-purple-50">
                  <td className="border p-2 font-medium w-1/3">{item.label}</td>
                  <td className="border p-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-600 space-y-2">
            <ReviewList />
            <AddReviewForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAdditionalDetail;
