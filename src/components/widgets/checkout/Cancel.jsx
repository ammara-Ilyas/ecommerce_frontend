import Link from "next/link";

export default function CancelOrder() {
  return (
    <div className="pt-20 flex flex-col justify-center items-center bg-white  p-6">
      <div className=" shadow-md rounded-lg p-8 max-w-md  w-full text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">
          Order Cancelled
        </h1>
        <p className="text-gray-700 mb-6">
          Your order has been cancelled. We're sorry to see you go!
        </p>

        <Link href="/">
          <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
