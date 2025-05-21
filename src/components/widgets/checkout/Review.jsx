import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Review() {
  const shippingInfo = useSelector((state) => state.checkout.shippingInfo);
  const paymentInfo = useSelector((state) => state.checkout.paymentInfo);
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  console.log("shipping info", shippingInfo);
  console.log("paymentInfo info", paymentInfo);
  useEffect(() => {
    setAddresses([
      shippingInfo.address1,
      shippingInfo.city,
      shippingInfo.state,
      shippingInfo.zip,
      shippingInfo.country,
    ]);
    setPayments([
      { name: "Card type:", detail: "Visa" },
      { name: "Card holder:", detail: paymentInfo.cardName },
      { name: "Card number:", detail: paymentInfo.cardNumber },
      { name: "Expiry date:", detail: paymentInfo.expiryDate },
    ]);
  }, []);
  return (
    <Stack spacing={2}>
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: 20 }}
          >
            Shipment details
          </Typography>
          <Typography gutterBottom sx={{ fontWeight: "bold" }}>
            {shippingInfo.firstName} {shippingInfo.lastName}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            {addresses.join(", ")}
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: 20 }}
          >
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: "100%", mb: 1 }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    {payment.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {payment.detail}
                  </Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
