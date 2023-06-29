import { Form, Input, Button, Rate } from "antd";

import { useAntdMessageContext } from "@/contexts";
import { useEditReview } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

export default function EditReviewForm({
  review,
  swapNewReview,
  onModelClose,
}) {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const { editReview, isLoading } = useEditReview((isSuccess, response) => {
    return isSuccess
      ? (swapNewReview(response?.data),
        // form.setFieldsValue({
        //   rating: review?.rating,
        //   reviewDescription: review?.reviewDescription,
        // }),
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
      initialValues={{
        rating: review?.rating,
        reviewDescription: review?.reviewDescription,
      }}
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
