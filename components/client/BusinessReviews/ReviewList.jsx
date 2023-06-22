import { useState } from "react";
import { Empty, Modal, Rate } from "antd";

import EditReviewForm from "@/components/client/BusinessReviews/EditReviewForm";

export default function ReviewList({ reviews, swapNewReview }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  function onModelClose() {
    setIsEditing(false);
    setSelectedReview(null);
  }

  return (
    <>
      <h3 className="font-bold">User Reviews</h3>
      {!reviews?.length ? (
        <Empty description="Nothing here!" />
      ) : (
        reviews.map((review) => {
          return (
            <div
              className="border-b-2 border-black my-8"
              key={review?.reviewId}
            >
              <div className="text-xs font-bold">
                {review?.userFirstName} {review?.userLastName}
              </div>
              <Rate
                className="text-sm my-2"
                count={5}
                value={review?.rating}
                disabled
              />
              <div className="text-xs">{review?.reviewDescription}</div>
              <div
                onClick={() => {
                  setSelectedReview(review);
                  setIsEditing(true);
                }}
                className="text-xs mt-2 cursor-pointer"
              >
                Edit
              </div>
            </div>
          );
        })
      )}

      <Modal
        title="Edit Business Review"
        open={isEditing}
        onCancel={onModelClose}
        footer={null}
      >
        <EditReviewForm
          review={selectedReview}
          swapNewReview={swapNewReview}
          onModelClose={onModelClose}
        />
      </Modal>
    </>
  );
}
