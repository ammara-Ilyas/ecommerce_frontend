"use client";
import React, { useState } from "react";
import AccountForm from "@/components/widgets/contact/AccountForm";
import ChangePassword from "@/components/widgets/contact/ChangePassword";

const Page = () => {
  const [activeTab, setActiveTab] = useState("edit");
  return (
    <div>
      <div>
        <div className="shadow-md rounded-md w-[95%] mx-auto bg-white  mt-10 ">
          <div className="w-full border-b border-gray-300 flex mt-6  text-[15px] font-medium text-gray-900 pt-8 px-8 items-center space-x-6">
            <button
              onClick={() => setActiveTab("edit")}
              className={` pb-3 ${
                activeTab === "edit"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              EDIT PROFILE
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={` pb-3 ${
                activeTab === "password"
                  ? "text-blue-500 border-b-2  border-blue-500"
                  : "text-gray-600"
              }`}
            >
              CHANGE PASSWORD
            </button>
          </div>
          {activeTab === "edit" && <AccountForm />}
          {activeTab === "password" && (
            <div>
              <ChangePassword />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
