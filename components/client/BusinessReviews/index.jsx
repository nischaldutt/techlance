import { useState } from "react";
import { Divider, Rate } from "antd";

import { useAuthContext } from "@/contexts";

import ReviewList from "@/components/client/BusinessReviews/ReviewList";
import CreateReviewForm from "@/components/client/BusinessReviews/CreateReviewForm";

export default function BusinessReviews({ businessId = 5, rating = 4 }) {
  const { isAuthenticated, user } = useAuthContext();
  const [reviews, setReviews] = useState([]);

  function addNewReview(newReview) {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  }

  function swapNewReview(newReview) {
    setReviews((prevReviews) => {
      return prevReviews.map((pre) => {
        return pre?.reviewId === newReview?.reviewId ? newReview : pre;
      });
    });
  }

  return (
    <div className="py-4 text-gray-700">
      <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
        Ratings
      </div>

      <div className="flex gap-4 items-center">
        <h4 className="text-4xl font-bold">4.5</h4>
        <Rate className="text-2xl" count={1} value={rating} />
      </div>

      <Divider />

      <ReviewList reviews={reviews} swapNewReview={swapNewReview} />

      <Divider />

      {isAuthenticated && (
        <CreateReviewForm businessId={businessId} addNewReview={addNewReview} />
      )}
    </div>
  );
}
