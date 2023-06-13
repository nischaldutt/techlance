import { useState } from "react";
import { Button, Divider, Empty, Form, Input, Modal, Rate } from "antd";

import { useAntdMessageContext } from "@/contexts";
import { useEditReview } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const RatingStats = ({
  businessId = 76,
  rating = 0,
  reviews,
  swapNewReview,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  function onModelClose() {
    setIsEditing(false);
    // setSelectedReview(null);
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <h4 className="text-4xl font-bold">4.5</h4>
        <Rate className="text-2xl" count={1} value={rating} />
      </div>

      <Divider />

      <h3 className="font-bold">User Reviews</h3>
      {!reviews?.length ? (
        <Empty description="Nothing here!" />
      ) : (
        reviews.map((review) => {
          // console.log({ review });
          return (
            <div
              className="border-b-2 border-black my-8"
              key={review?.reviewId}
            >
              <div className="text-xs font-bold">username</div>
              <Rate className="text-sm my-2" count={5} value={review?.rating} />
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

      <Divider />
    </>
  );
};

function EditReviewForm({ review, swapNewReview, onModelClose }) {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const { editReview, isLoading } = useEditReview((isSuccess, response) => {
    return isSuccess
      ? (swapNewReview(response?.data),
        form.setFieldsValue({
          rating: 0,
          reviewDescription: "",
        }),
        onModelClose(),
        successMessage(
          response?.message ||
            APP_CONSTANTS.MESSAGES.CUSTOMER.UPDATED_BUSINESS_REVIEW
        ))
      : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
  });

  function onSubmit(data) {
    return editReview({
      ...data,
      businessId: review?.businessId,
      reviewId: review?.reviewId,
    });
  }

  return (
    <Form
      name="editReviewForm"
      form={form}
      layout="vertical"
      size="small"
      onFinish={onSubmit}
    >
      <Form.Item
        name="rating"
        label={<p className="text-xs">Rating</p>}
        rules={[{ required: true, message: "Rating Required!" }]}
      >
        <Rate />
      </Form.Item>

      <Form.Item
        name="reviewDescription"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please describe your experience!",
          },
          {
            max: 200,
            message: "Max limit 200 exceeded!",
          },
        ]}
      >
        <TextArea
          rows={4}
          placeholder="Describe your experience here."
          showCount
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          size="small"
          htmlType="submit"
          name="submit"
          loading={isLoading}
        >
          Update Review
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RatingStats;
