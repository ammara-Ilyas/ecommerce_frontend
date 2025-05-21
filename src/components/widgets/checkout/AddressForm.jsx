import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "@/redux/silice/CheckoutSlice";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function AddressForm() {
  const dispatch = useDispatch();
  const shippingInfo = useSelector((state) => state.checkout.shippingInfo);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("target", e.target);

    dispatch(
      updateShippingInfo({
        [name]: type === "checkbox" ? checked : value,
      })
    );
  };

  return (
    <Grid container spacing={3} sx={{ height: "auto" }}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="firstName" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="John"
          autoComplete="given-name"
          required
          size="small"
          value={shippingInfo.firstName}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="lastName" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Snow"
          autoComplete="given-name"
          required
          size="small"
          value={shippingInfo.lastName}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="Johnsnow@gmail.com"
          autoComplete="email"
          required
          size="small"
          value={shippingInfo.email}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="phoneNumber" required>
          Phone Number
        </FormLabel>
        <OutlinedInput
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="+1 (555) 123-4567"
          autoComplete="phone number"
          required
          size="small"
          value={shippingInfo.phoneNumber}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="text"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
          value={shippingInfo.address1}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="text"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          size="small"
          value={shippingInfo.address2}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="text"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
          value={shippingInfo.city}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="text"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
          value={shippingInfo.state}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="text"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
          value={shippingInfo.zip}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="text"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
          value={shippingInfo.country}
          onChange={handleInputChange}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="saveAddress"
              checked={shippingInfo.saveAddress}
              onChange={handleInputChange}
            />
          }
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
