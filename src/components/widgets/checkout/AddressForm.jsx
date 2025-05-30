"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  OutlinedInput,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callPrivateApi } from "@/libs/CallApis";
import { useSelector } from "react-redux";
const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const [loading, setLoading] = useState(false);
  const cartItem = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        setUser(JSON.parse(localUser));
      }
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("user in address", user);

  // console.log("cart item", cartItem);
  const onSubmit = async (data) => {
    setLoading(true);
    // e.preventDefault();
    // console.log("data in checkout", data);

    try {
      const fullName = `${data.firstName} ${data.lastName}`;
      const fullAddress = `${data.address1}${
        data.address2 ? ", " + data.address2 : ""
      }, ${data.city}, ${data.state}, ${data.zip}, ${data.country}`;

      const payload = {
        userId: user.id,
        name: fullName,
        email: data.email,
        phone: data.phoneNumber,
        address: fullAddress,
        cartItems: cartItem,
        amount: Number(180),
      };

      const res = await callPrivateApi(
        "/create-checkout-session",
        "POST",
        payload
      );
      // console.log("res in address", res);

      if (res.url) {
        window.location.href = res.url;
      } else {
        toast.error("Failed to create checkout session");
      }
    } catch (err) {
      console.log("error", err);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{ color: "black", fontWeight: "bold", mb: 4 }}
      >
        Shipping Information
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {[
            { name: "firstName", label: "First Name", placeholder: "John" },
            { name: "lastName", label: "Last Name", placeholder: "Snow" },
            {
              name: "email",
              label: "Email",
              placeholder: "johnsnow@gmail.com",
              type: "email",
            },
            {
              name: "phoneNumber",
              label: "Phone Number",
              placeholder: "+1 (555) 123-4567",
            },
            {
              name: "address1",
              label: "Address Line 1",
              placeholder: "Street name and number",
            },
            {
              name: "address2",
              label: "Address Line 2",
              placeholder: "Apartment (optional)",
              required: false,
            },
            { name: "city", label: "City", placeholder: "New York" },
            { name: "state", label: "State", placeholder: "NY" },
            { name: "zip", label: "Zip Code", placeholder: "12345" },
            { name: "country", label: "Country", placeholder: "United States" },
          ].map(
            ({ name, label, placeholder, type = "text", required = true }) => (
              <FormGrid
                item
                xs={12}
                md={name === "address2" ? 12 : 6}
                key={name}
              >
                <FormLabel htmlFor={name}>
                  {label} {required && "*"}
                </FormLabel>
                <OutlinedInput
                  id={name}
                  placeholder={placeholder}
                  type={type}
                  defaultValue={name == "email" && user ? user.email : ""}
                  size="small"
                  {...register(name, {
                    required: required ? `${label} is required` : false,
                  })}
                />
                {errors[name] && (
                  <Typography color="error" fontSize={13}>
                    {errors[name]?.message}
                  </Typography>
                )}
              </FormGrid>
            )
          )}

          <FormGrid item xs={12}>
            <FormControlLabel
              control={<Checkbox {...register("saveAddress")} />}
              label="Use this address for payment details"
            />
          </FormGrid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          disabled={loading}
        >
          {loading ? "Processing..." : "Place Order"}
        </Button>
      </form>
      <ToastContainer />
    </>
  );
}
