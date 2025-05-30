"use client";
import React, { useEffect, useState } from "react";
import { TextField, Button, Avatar } from "@mui/material";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AccountForm = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const parsedUser = JSON.parse(localUser);
        setUser(parsedUser);
        setFormData({
          name: parsedUser.name || "",
          email: parsedUser.email || "",
          phone: parsedUser.phone || "",
        });
        setImage(parsedUser.img || null);
      }
    }
  }, []);
  // Handle form field changes
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file changes
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imagePreview = reader.result; // Base64 URL of the image

        // Update the states for both user and form data
        setImage(imagePreview);
        setUser((prevUser) => ({ ...prevUser, img: imagePreview }));
        setFormData((prevFormData) => ({ ...prevFormData, img: imagePreview }));
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    // console.log("User data updated:", formData);
    toast.success("Account update successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDarkMode ? "dark" : "light",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex  flex-row gap-10 ">
        <div className="flex mt-10 w-[25%] justify-center ">
          {/* Circular Upload Container */}
          <div
            className="relative w-36 h-36 rounded-full border-2  border-blue-500 overflow-hidden cursor-pointer hover:bg-blue-100 group"
            onClick={() => document.getElementById("fileInput").click()} // Click triggers file input
          >
            {/* Uploaded Image or Default Placeholder */}
            {image ? (
              <Image
                src={image}
                alt="image"
                className="w-full h-full object-cover"
                width={144}
                height={144}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Avatar sx={{ bgcolor: blue[800] }}>A</Avatar>
              </div>
            )}

            {/* Upload Icon (visible on hover) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5 20h14v-2H5v2zm7-18L3.5 10h3v6h7v-6h3L12 2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Hidden File Input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Form Fields Section */}
        <div className="bg-white p-6 w-[65%]  ">
          <div className="grid grid-cols-2 gap-4 mb-10 border-2">
            <div className="flex flex-col">
              <TextField
                value={formData.name}
                name="name"
                label="Name"
                type="text"
                onChange={handleForm}
                fullWidth
                className="mb-4"
              />
            </div>
            <div className="flex flex-col">
              <TextField
                value={formData.email}
                name="email"
                label="Email"
                type="email"
                onChange={handleForm}
                fullWidth
                className="mb-4"
              />
            </div>
            <div className="flex flex-col">
              <TextField
                value={formData.phone}
                name="phone"
                label="Phone Number"
                type="number"
                onChange={handleForm}
                fullWidth
                className="mb-4"
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className="bg-blue-600 w-[20%] hover:bg-blue-700 mt-4"
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default AccountForm;
