import { Space, Form, DatePicker, Checkbox, Divider } from "antd";

export default function DateTimeInputs({
  name,
  isDisabled = false,
  ...restParams
}) {
  return (
    <>
      <Space align="baseline" wrap>
        <Form.Item
          {...restParams}
          name={[name, "date"]}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Missing Date",
            },
          ]}
        >
          <DatePicker
            className="w-36 h-10 text-lg"
            format="YYYY-MM-DD"
            isDisabled={isDisabled}
          />
        </Form.Item>

        <div className="px-2"></div>

        <Form.Item
          {...restParams}
          name={[name, "timeIds"]}
          rules={[
            {
              required: true,
              message: "Missing Time",
            },
          ]}
        >
          <Checkbox.Group>
            <Checkbox value={1} isDisabled={isDisabled}>
              Morning
            </Checkbox>
            <Checkbox value={2} isDisabled={isDisabled}>
              Afternoon
            </Checkbox>
            <Checkbox value={3} isDisabled={isDisabled}>
              Evening
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Space>

      <Divider className="my-2" />
    </>
  );
}
