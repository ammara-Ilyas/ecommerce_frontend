// components/OrderSummaryModal.jsx
import { Dialog } from "@headlessui/react";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

export default function OrderSummaryModal({
  isOpen,
  onClose,
  cartItems,
  total,
  onConfirm,
  loading,
}) {
  const [agreed, setAgreed] = useState(false);
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal Content Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4">
          {/* Modal Title */}
          <Dialog.Title className="text-lg font-semibold">
            Confirm Your Order
          </Dialog.Title>

          {/* Cart Items */}
          <ul className="text-sm space-y-1">
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.product.product} x {item.quantity} — $
                {(item.product.newPrice / 100).toFixed(2)}
              </li>
            ))}
          </ul>

          {/* Total Amount */}
          <div className="text-right font-bold">
            Total: ${(total / 100).toFixed(2)}
          </div>
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm ml-2">
            I agree to the{" "}
            <a href="/terms" className="underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/refund-policy" className="underline">
              Refund Policy
            </a>
            .
          </label>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Proceed"
              )}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
