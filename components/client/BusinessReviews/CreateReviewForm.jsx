import { Form, Input, Button, Rate } from "antd";

import { useAntdMessageContext } from "@/contexts";
import { useCreateReview } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

export default function CreateReviewForm({ businessId, refetch }) {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const { createReview, isLoading } = useCreateReview((isSuccess, response) => {
    return isSuccess
      ? (refetch(),
        form.resetFields(),
        successMessage(
          response?.message ||
            APP_CONSTANTS.MESSAGES.CUSTOMER.ADDED_BUSINESS_REVIEW
        ))
      : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
  });

  function onSubmit(data) {
    return createReview({ ...data, businessId });
  }

  return (
    <Form
      name="reviewForm"
      form={form}
      layout="vertical"
      size="small"
      onFinish={onSubmit}
    >
      <Form.Item
        name="rating"
        label="How much would you rate this business?"
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
          Submit Review
        </Button>
      </Form.Item>
    </Form>
  );
}
