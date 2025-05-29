"use client";

import { Star, StarBorder } from "@mui/icons-material";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Restu Muhammad",
    date: "2025-04-13",
    comment: "nice",
    rating: 5,
  },
  {
    name: "Virza Bahul",
    date: "2025-04-13",
    comment: "nice",
    rating: 3.5,
  },
  {
    name: "Muhammad Virza",
    date: "2025-04-13",
    comment: "nice",
    rating: 4.2,
  },
  {
    name: "Suhas Suryavanshi",
    date: "2025-01-15",
    comment: "Nice product",
    rating: 1,
  },
];

const ReviewList = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await callPublicApi(`/reviews/${id}`, "GET");
        console.log("res ", response);

        setReviews(response.reviews);
      } catch (error) {
        toast.error("Error fetching reviews:" || error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllReviews();
  }, [id]);
  return (
    <div className="bg-purple-50 p-6 rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Customer questions & answers
      </h2>

      {reviews.map((review, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">{review.name}</h3>
              <p className="text-sm text-gray-500">
                {format(new Date(review.date), "yyyy-MM-dd")}
              </p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) =>
                i < review.rating ? (
                  <Star key={i} className="text-yellow-500" fontSize="small" />
                ) : (
                  <StarBorder
                    key={i}
                    className="text-yellow-500"
                    fontSize="small"
                  />
                )
              )}
            </div>
          </div>
          <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
