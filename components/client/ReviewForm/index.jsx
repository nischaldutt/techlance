import { Form, Input, Button, Rate } from "antd";

import { useAntdMessageContext } from "@/contexts";
import { useAddReview } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

export default function ReviewForm() {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const { addRemove, isLoading } = useAddReview((isSuccess, response) => {
    return isSuccess
      ? (successMessage(
          response?.message ||
            APP_CONSTANTS.MESSAGES.CUSTOMER.ADDED_BUSINESS_REVIEW
        ),
        next())
      : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
  });

  function onSubmit(data) {
    console.log({ data });
  }

  return (
    <Form name="reviewForm" form={form} layout="vertical" onFinish={onSubmit}>
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
