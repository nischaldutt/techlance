import { Button, Form, Input, Checkbox } from "antd";

import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useCreateBusinessInsurance } from "@/hooks";
import { mergeObjects } from "@/utils";
import { APP_CONSTANTS } from "@/constants";

const InsuranceInfo = ({ previous, next }) => {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  const cachedInsuranceInfo = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_INSURANCE
  );

  const { createBusinessInsurance, isLoading } = useCreateBusinessInsurance(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.BUSINESS.INSURANCE_INFO_ADDED
          ),
          next())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  function onSubmit(data) {
    return cachedInsuranceInfo
      ? createBusinessInsurance(mergeObjects(cachedInsuranceInfo, data))
      : createBusinessInsurance(data);
  }

  return (
    <section className="w-96">
      <Form
        name="insuranceInfo"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        autoComplete="off"
        initialValues={cachedInsuranceInfo}
        requiredMark="optional"
      >
        <Form.Item
          label="Email of your Insurance Agent/Broker"
          name="brokerEmail"
          rules={[
            { required: true, message: "Please enter agent's email!" },
            { type: "email", message: "Invalid email" },
          ]}
          className="my-0"
        >
          <Input placeholder="john.doe@gmail.com" />
        </Form.Item>

        <Form.Item
          label=""
          name="contactBrokerPermission"
          valuePropName="checked"
          className="my-0"
          rules={[
            { required: true, message: "Permission Required!" },
            { type: "boolean", message: "Invalid value!" },
          ]}
        >
          <Checkbox>Allow Techlance to contact my Agent/Broker</Checkbox>
        </Form.Item>

        <Form.Item
          label="Insurance Policy Number"
          name="insurancePolicyNumber"
          rules={[
            {
              required: true,
              message: "Insurance Policy number required!",
            },
            {
              pattern: APP_CONSTANTS.REGEXES.BUSINESS_INSURANCE_POLICY_NUMBER,
              message: "Invalid Insurance Policy number!",
            },
          ]}
        >
          <Input placeholder="eg. 12345" />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex flex-col gap-4 p-3 bg-gray-100 rounded-lg">
              <p className="font-bold">I certify that: </p>
              <p className="text-justify">
                I work solely by myself, with no full-time or part-time
                employees, contractors or sub-trades.
              </p>
              <p className="font-bold text-center">OR</p>
              <p className="text-justify">
                I have full-time and/or part-time employees or employ
                contractors or sub-trades as needed. I have an active WSIB
                number.
              </p>
            </div>
          }
          name="insuranceAgreement"
          valuePropName="checked"
          rules={[
            { required: true, message: "" },
            { type: "boolean", message: "Invalid value!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Please accept the Insurance agreement!")
                );
              },
            }),
          ]}
        >
          <Checkbox>
            I agree and acknowledge that one of the statements above is true
          </Checkbox>
        </Form.Item>

        <div className="flex justify-between">
          <Form.Item>
            <Button
              type="primary"
              size="large"
              disabled={isLoading}
              onClick={() => previous()}
            >
              Previous
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              name="submit"
              loading={isLoading}
            >
              Save & Continue
            </Button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default InsuranceInfo;
