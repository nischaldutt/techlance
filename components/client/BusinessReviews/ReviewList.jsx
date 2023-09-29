import { useEffect, useState } from "react";
import { Button, Empty, List, Modal, Rate } from "antd";

import { useAuthContext } from "@/contexts";

import EditReviewForm from "@/components/client/BusinessReviews/EditReviewForm";

export default function ReviewList({
  reviewGroups,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  refetch,
}) {
  const { isAuthenticated, user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  function onModelClose() {
    setIsEditing(false);
    setSelectedReview(null);
  }

  const LoadMoreReviewsButtom = hasNextPage ? (
    <div className="text-center mt-3 h-8">
      <Button onClick={fetchNextPage}>See more</Button>
    </div>
  ) : null;

  return (
    <>
      <h3 className="font-bold">User Reviews</h3>
      {reviewGroups?.map((group, index) => {
        return group?.reviews.length === 0 ? (
          <Empty
            key={index}
            description="Be the first to review this business!"
          />
        ) : (
          <div key={index}>
            {group?.reviews?.map((review) => {
              return (
                <div className="my-8" key={review?.reviewId}>
                  {/* todo: create emoji avatars randomly for users */}
                  <div className="text-xs font-bold">
                    {review?.firstName} {review?.lastName}
                  </div>
                  <Rate
                    className="text-sm my-2"
                    count={5}
                    value={review?.rating}
                    disabled
                  />
                  <div className="text-xs">{review?.reviewDescription}</div>
                  {review?.userId === user?.id ? (
                    <div
                      onClick={() => {
                        setSelectedReview(review);
                        setIsEditing(true);
                      }}
                      className="text-xs mt-2 cursor-pointer"
                    >
                      Edit
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}

      {LoadMoreReviewsButtom}

      <Modal
        title="Edit Business Review"
        open={isEditing}
        onCancel={onModelClose}
        footer={null}
      >
        <EditReviewForm
          review={selectedReview}
          onModelClose={(editedReview) => {
            refetch();
            onModelClose();
          }}
        />
      </Modal>
    </>
  );
}
