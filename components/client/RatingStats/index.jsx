import { Button, Divider, Empty, Form, Input, Rate } from "antd";

import { useAntdMessageContext } from "@/contexts";
import { useAddReview } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const RatingStats = ({ rating = 0, reviews }) => {
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
          console.log({ review });
          return (
            <div className="my-4" key={review?.reviewId}>
              <div className="text-xs font-bold">username</div>
              <Rate className="text-sm my-2" count={5} value={review?.rating} />
              <div className="text-xs">{review?.reviewDescription}</div>
              <div className="text-xs mt-2">Edit</div>
            </div>
          );
        })
      )}

      <Divider />
    </>
  );
};

function EditReviewForm() {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const { addRemove, isLoading } = useAddReview((isSuccess, response) => {
    return isSuccess
      ? (addNewReview(response?.data),
        form.resetFields(),
        successMessage(
          response?.message ||
            APP_CONSTANTS.MESSAGES.CUSTOMER.ADDED_BUSINESS_REVIEW
        ))
      : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
  });

  function onSubmit(data) {
    return addRemove({ ...data, businessId });
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
        label="Rating"
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
          Submit a review
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RatingStats;
