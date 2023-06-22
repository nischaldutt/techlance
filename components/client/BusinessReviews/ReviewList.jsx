import { useState } from "react";
import { Button, Empty, List, Modal, Rate } from "antd";

import EditReviewForm from "@/components/client/BusinessReviews/EditReviewForm";

export default function ReviewList({ reviews, swapNewReview }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  function onModelClose() {
    setIsEditing(false);
    setSelectedReview(null);
  }

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );

    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };

  const loadMore = reviews?.length ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>See more</Button>
    </div>
  ) : null;

  return (
    <>
      <h3 className="font-bold">User Reviews</h3>
      {!reviews?.length ? (
        <Empty description="Nothing here!" />
      ) : (
        //   reviews.map((review) => {
        //     return (
        //       <div
        //         className="border-b-2 border-black my-8"
        //         key={review?.reviewId}
        //       >
        //         <div className="text-xs font-bold">
        //           {review?.userFirstName} {review?.userLastName}
        //         </div>
        //         <Rate
        //           className="text-sm my-2"
        //           count={5}
        //           value={review?.rating}
        //           disabled
        //         />
        //         <div className="text-xs">{review?.reviewDescription}</div>
        //         <div
        //           onClick={() => {
        //             setSelectedReview(review);
        //             setIsEditing(true);
        //           }}
        //           className="text-xs mt-2 cursor-pointer"
        //         >
        //           Edit
        //         </div>
        //       </div>
        //     );
        //   })

        <List
          className="businessReviewsList"
          loading={loading}
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={reviews}
          renderItem={(review) => (
            <List.Item
              className="my-8"
              key={review?.reviewId}
              style={{ padding: 0 }}
            >
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
              <div
                onClick={() => {
                  setSelectedReview(review);
                  setIsEditing(true);
                }}
                className="text-xs mt-2 cursor-pointer"
              >
                Edit
              </div>
            </List.Item>
          )}
        />
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
