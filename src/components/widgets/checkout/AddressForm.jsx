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
  RadioGroup,
  Radio,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callPrivateApi } from "@/libs/CallApis";
import { useSelector } from "react-redux";
import OrderSummaryModal from "@/components/miniWidgets/OrderSummary";
import StripePayment from "./StripePayment";
import StripeWrapper from "./StripeWrapper";
const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [refundAccepted, setRefundAccepted] = useState(false);
  const [bankReference, setBankReference] = useState("");
  const [user, setUser] = useState({});
  const cartItem = useSelector((state) => state.cart.cartItems);
  function getRandomAmount() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  }

  const totalAmount = getRandomAmount();
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

  const onSubmit = async (data) => {
    console.log("data in submit", data);

    setFormData(data);
    setShowSummary(true);
  };
  const handleConfirm = async () => {
    setLoading(true);
    setShowSummary(false);
    setLoading(true);
    const data = formData;

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
        paymentMethod,
        refundAccepted,
        bankReference: paymentMethod === "bank" ? bankReference : undefined,
      };

      const res = await callPrivateApi(
        "/create-checkout-session",
        "POST",
        payload
      );
      console.log("res in address", res);

      if (paymentMethod === "card") {
        if (res.url) {
          setTimeout(() => {
            window.location.href = res.url;
          }, 800);
        } else {
          toast.error("Failed to create checkout session");
        }
      } else if (paymentMethod === "bank") {
        toast.success("Bank order created. Please transfer using these details.");
        if (res.instructions) {
          const { accountName, accountNumber, bankName, iban, reference } =
            res.instructions;
          toast.info(
            `Account: ${accountName} | ${bankName}\nAcc#: ${accountNumber}\nIBAN: ${iban}\nRef: ${reference}`,
            { autoClose: 8000 }
          );
        }
        // Navigate to orders page so the user can track status
        router.push("/order");
      }
    } catch (err) {
      console.log("error", err);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
   console.log("cart items",cartItem);

  return (
    <>
      <Typography variant="h6" sx={{ color: "#1d4ed8", fontWeight: 700, mb: 3 }}>
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

          <FormGrid item xs={12}>
            <FormLabel sx={{ color: "#1d4ed8", fontWeight: 600 }}>Payment Method *</FormLabel>
            <RadioGroup
              row
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel value="card" control={<Radio color="primary" />} label="Card" />
              <FormControlLabel value="bank" control={<Radio color="primary" />} label="Bank Transfer" />
            </RadioGroup>
          </FormGrid>

          {paymentMethod === "bank" && (
            <>
              <FormGrid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  You will receive bank details and a reference after placing the order. Optionally add your bank reference now.
                </Typography>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <FormLabel htmlFor="bankReference">Bank Reference (optional)</FormLabel>
                <OutlinedInput
                  id="bankReference"
                  placeholder="e.g. TRX-123456"
                  size="small"
                  value={bankReference}
                  onChange={(e) => setBankReference(e.target.value)}
                />
              </FormGrid>
            </>
          )}

          <FormGrid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" checked={refundAccepted} onChange={(e) => setRefundAccepted(e.target.checked)} />}
              label={
                <span>
                  I agree to the <a href="/refund" target="_blank" rel="noreferrer">refund policy</a>
                </span>
              }
            />
          </FormGrid>
        </Grid>

        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 4, backgroundColor: '#1d4ed8' }}>
          Place Order
        </Button>
      </form>
      <OrderSummaryModal
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
        onConfirm={handleConfirm}
        cartItems={cartItem}
        total={totalAmount}
        loading={loading}
      />

      <ToastContainer />
    </>
  );
}
