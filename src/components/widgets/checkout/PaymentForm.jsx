"use client";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentInfo } from "@/redux/silice/CheckoutSlice";

// Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  width: "100%",
  "&:hover": {
    background:
      "linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)",
    borderColor: "primary.light",
    boxShadow: "0px 2px 8px hsla(0, 0%, 0%, 0.1)",
    ...theme.applyStyles("dark", {
      background:
        "linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)",
      borderColor: "primary.dark",
      boxShadow: "0px 1px 8px hsla(210, 100%, 25%, 0.5) ",
    }),
  },
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
    maxWidth: `calc(50% - ${theme.spacing(1)})`,
  },
}));

const PaymentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 375,
  padding: theme.spacing(3),
  borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
  border: "1px solid ",
  borderColor: (theme.vars || theme).palette.divider,
  background:
    "linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)",
  boxShadow: "0px 4px 8px hsla(210, 0%, 0%, 0.05)",
  [theme.breakpoints.up("xs")]: {
    height: 300,
  },
  [theme.breakpoints.up("sm")]: {
    height: 350,
  },
  ...theme.applyStyles("dark", {
    background:
      "linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)",
    boxShadow: "0px 4px 8px hsl(220, 35%, 0%)",
  }),
}));

const FormGrid = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

// Main Component
export default function PaymentForm() {
  const dispatch = useDispatch();
  const paymentInfo = useSelector((state) => state.checkout.paymentInfo);

  const [paymentType, setPaymentType] = useState("creditCard");

  // Validation states
  const [errors, setErrors] = useState({
    cardNumber: "",
    cvv: "",
    cardName: "",
    expiryDate: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "cardNumber":
        return value.replace(/\s/g, "").length !== 16
          ? "Card number must be 16 digits"
          : "";
      case "cvv":
        return value.length !== 3 ? "CVV must be 3 digits" : "";
      case "cardName":
        return value.trim() === "" ? "Name is required" : "";
      case "expiryDate":
        return value.trim() === "" ? "Expiry date is required" : "";
      default:
        return "";
    }
  };

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;

    if (id === "cardNumber") {
      const numericValue = value.replace(/\D/g, "").slice(0, 16);
      formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    if (id === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    if (id === "card-expiration") {
      formattedValue = value;
    }

    // Update Redux
    dispatch(
      updatePaymentInfo({
        [id === "card-expiration" ? "expiryDate" : id]: formattedValue,
      })
    );

    // Validate
    const error = validateField(
      id === "card-expiration" ? "expiryDate" : id,
      formattedValue
    );
    setErrors((prev) => ({
      ...prev,
      [id === "card-expiration" ? "expiryDate" : id]: error,
    }));
  };

  const handleSaveCardChange = (e) => {
    dispatch(updatePaymentInfo({ saveCard: e.target.checked }));
  };

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <FormControl fullWidth>
        <RadioGroup
          name="paymentType"
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
          sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 2 }}
        >
          <Card selected={paymentType === "creditCard"}>
            <CardActionArea onClick={() => setPaymentType("creditCard")}>
              <CardContent
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CreditCardRoundedIcon
                  fontSize="small"
                  sx={{
                    color:
                      paymentType === "creditCard"
                        ? "primary.main"
                        : "grey.400",
                  }}
                />
                <Typography fontWeight="medium">Card</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card selected={paymentType === "bankTransfer"}>
            <CardActionArea onClick={() => setPaymentType("bankTransfer")}>
              <CardContent
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <AccountBalanceRoundedIcon
                  fontSize="small"
                  sx={{
                    color:
                      paymentType === "bankTransfer"
                        ? "primary.main"
                        : "grey.400",
                  }}
                />
                <Typography fontWeight="medium">Bank account</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>

      {/* Credit Card Fields */}
      {paymentType === "creditCard" && (
        <Box display="flex" flexDirection="column" gap={2}>
          <PaymentContainer>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">Credit card</Typography>
              <CreditCardRoundedIcon color="disabled" />
            </Box>

            <SimCardRoundedIcon
              sx={{
                fontSize: { xs: 48, sm: 56 },
                transform: "rotate(90deg)",
                color: "text.secondary",
              }}
            />

            <Box display="flex" gap={2}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="cardNumber" required>
                  Card number
                </FormLabel>
                <OutlinedInput
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  value={paymentInfo.cardNumber}
                  onChange={handleFieldChange}
                  error={!!errors.cardNumber}
                  size="small"
                />
                {errors.cardNumber && (
                  <Typography variant="caption" color="error">
                    {errors.cardNumber}
                  </Typography>
                )}
              </FormGrid>

              <FormGrid sx={{ maxWidth: "20%" }}>
                <FormLabel htmlFor="cvv" required>
                  CVV
                </FormLabel>
                <OutlinedInput
                  id="cvv"
                  placeholder="123"
                  value={paymentInfo.cvv}
                  onChange={handleFieldChange}
                  error={!!errors.cvv}
                  size="small"
                />
                {errors.cvv && (
                  <Typography variant="caption" color="error">
                    {errors.cvv}
                  </Typography>
                )}
              </FormGrid>
            </Box>

            <Box display="flex" gap={2}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="cardName" required>
                  Name
                </FormLabel>
                <OutlinedInput
                  id="cardName"
                  placeholder="John Smith"
                  value={paymentInfo.cardName}
                  onChange={handleFieldChange}
                  error={!!errors.cardName}
                  size="small"
                />
                {errors.cardName && (
                  <Typography variant="caption" color="error">
                    {errors.cardName}
                  </Typography>
                )}
              </FormGrid>

              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Expiration date
                </FormLabel>
                <OutlinedInput
                  id="card-expiration"
                  type="month"
                  value={paymentInfo.expiryDate}
                  onChange={handleFieldChange}
                  error={!!errors.expiryDate}
                  size="small"
                />
                {errors.expiryDate && (
                  <Typography variant="caption" color="error">
                    {errors.expiryDate}
                  </Typography>
                )}
              </FormGrid>
            </Box>
          </PaymentContainer>

          <FormControlLabel
            control={
              <Checkbox
                name="saveCard"
                checked={paymentInfo.saveCard}
                onChange={handleSaveCardChange}
              />
            }
            label="Remember credit card details for next time"
          />
        </Box>
      )}

      {/* Bank Transfer */}
      {paymentType === "bankTransfer" && (
        <Box display="flex" flexDirection="column" gap={2}>
          <Alert severity="warning" icon={<WarningRoundedIcon />}>
            Your order will be processed once we receive the funds.
          </Alert>
          <Typography variant="subtitle1" fontWeight="medium">
            Bank account
          </Typography>
          <Typography>
            Please transfer the payment to the account below.
          </Typography>
          <Typography>
            <strong>Bank:</strong> Mastercredit
          </Typography>
          <Typography>
            <strong>Account number:</strong> 123456789
          </Typography>
          <Typography>
            <strong>Routing number:</strong> 987654321
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
