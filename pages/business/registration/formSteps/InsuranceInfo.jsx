import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";
import { useQueryClient } from "@tanstack/react-query";

import { useAntdMessageContext } from "@/contexts";
import { useCreateBusinessInsurance } from "@/hooks";
import { mergeObjects } from "@/utils";
import { APP_CONSTANTS } from "@/constants";

// todo: perform clean up using removeQueries in the last step of business creation
const InsuranceInfo = ({ previous, next }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { control, handleSubmit } = useReactHookForm();
  const { messageApi } = useAntdMessageContext();

  const cachedInsuranceData = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_INSURANCE,
  ]);

  const successMessage = (successMsg) => {
    messageApi.open({
      type: "success",
      content: successMsg || APP_CONSTANTS.MESSAGES.INSURANCE_INFO_ADDED,
    });
  };

  const errorMessage = (errorMsg) => {
    messageApi.open({
      type: "error",
      content: errorMsg || APP_CONSTANTS.MESSAGES.ERROR,
    });
  };

  const { mutate: createBusinessInsurance, isLoading } =
    useCreateBusinessInsurance((isSuccess, response) => {
      return isSuccess
        ? (successMessage(response?.message), next())
        : errorMessage(response);
    });

  function onSubmit(data) {
    return cachedInsuranceData
      ? createBusinessInsurance(mergeObjects(cachedInsuranceData, data))
      : createBusinessInsurance(data);
  }

  return (
    <section className="w-96">
      <Form
        name="insuranceInfo"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
        initialValues={cachedInsuranceData}
        requiredMark="optional"
      >
        <Controller
          name="brokerEmail"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Email of your Insurance Agent/Broker"
              name="brokerEmail"
              rules={[
                {
                  required: true,
                  message: "test@gmail.com",
                },
              ]}
              className="my-0"
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="contactBrokerPermission"
          control={control}
          render={({ field }) => (
            <Form.Item
              label=""
              name="contactBrokerPermission"
              valuePropName="checked"
              className="my-0"
            >
              <Checkbox {...field}>
                Allow Techlance to contact my Agent/Broker
              </Checkbox>
            </Form.Item>
          )}
        />

        <Controller
          name="insurancePolicyNumber"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Insurance Policy Number"
              name="insurancePolicyNumber"
              rules={[
                {
                  // required: true,
                  message: "eg. 12345",
                },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="insuranceAgreement"
          control={control}
          render={({ field }) => (
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
                {
                  required: true,
                  message: "eg. 12345",
                },
              ]}
            >
              <Checkbox {...field}>
                I agree and acknowledge that one of the statements above is true
              </Checkbox>
            </Form.Item>
          )}
        />

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
