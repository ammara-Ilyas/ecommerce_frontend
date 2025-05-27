import { useState } from "react";

export default function Admin() {
  const [enabled, setEnabled] = useState(true);

  const toggleRefund = async () => {
    const res = await fetch("/api/toggle-refund", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enable: !enabled }),
    });
    const data = await res.json();
    setEnabled(data.settings.refundEnabled);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <p>
        Refunds are currently{" "}
        <strong>{enabled ? "Enabled" : "Disabled"}</strong>.
      </p>
      <button
        onClick={toggleRefund}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        {enabled ? "Disable Refunds" : "Enable Refunds"}
      </button>
    </div>
  );
}
