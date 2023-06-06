import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";
import { useQueryClient } from "@tanstack/react-query";

import { useAntdMessageContext } from "@/contexts";
import { useCreateBusinessBasicInfo } from "@/hooks";
import { mergeObjects } from "@/utils";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const smallFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 8,
      offset: 0,
    },
  },
};

const BasinInfo = ({ next }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { control, handleSubmit } = useReactHookForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const cachedBasicInfoData = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
  ]);

  const { createBusiness, isLoading } = useCreateBusinessBasicInfo(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.BUSINESS.COMPANY_REGISTERED
          ),
          next())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  function onSubmit(basicInfo) {
    return cachedBasicInfoData
      ? createBusiness(mergeObjects(cachedBasicInfoData, basicInfo))
      : createBusiness(basicInfo);
  }

  return (
    <section className="w-96">
      <Form
        name="basicInfo"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
        initialValues={cachedBasicInfoData}
        requiredMark="optional"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Business Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Business name is required!",
                },
                {
                  min: 3,
                  message: "Business name must be atleast 3 characters long!",
                },
              ]}
            >
              <Input placeholder="eg. Techlance" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Business Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Business address is required!",
                },
                {
                  min: 10,
                  message:
                    "Business address must be at least 10 characters long!",
                },
              ]}
            >
              <Input placeholder="eg. 123 BayView Street, Calgary" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="unit"
          control={control}
          render={({ field }) => (
            <Form.Item
              {...smallFormItemLayout}
              label="Units/Suites"
              name="unit"
              rules={[
                {
                  pattern: APP_CONSTANTS.REGEXES.BUSINESS_UNITS,
                  message: "Invalid Units",
                },
              ]}
            >
              <Input placeholder="eg. 4" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="hst"
          control={control}
          render={({ field }) => (
            <Form.Item
              {...smallFormItemLayout}
              label="HST Number"
              name="hst"
              rules={[
                {
                  required: true,
                  message: "HST required!",
                },
                {
                  pattern: APP_CONSTANTS.REGEXES.BUSINESS_HST,
                  message: "Invalid HST!",
                },
              ]}
            >
              <Input placeholder="eg. 12345" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="website"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Website"
              name="website"
              rules={[
                {
                  pattern: APP_CONSTANTS.REGEXES.WEBSITE_URL,
                  message: "Invalid URL!",
                },
              ]}
            >
              <Input addonBefore="https://" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="discoverDescription"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Where did you learn about us?"
              name="discoverDescription"
            >
              <TextArea
                rows={4}
                placeholder="eg. Tell us about where did you learn about us?"
                minLength={6}
                {...field}
              />
            </Form.Item>
          )}
        />

        <Controller
          name="industryStandardAgreement"
          control={control}
          render={({ field }) => (
            <Form.Item
              label={
                <p className="text-justify">
                  By checking this box you represent and warrant that you hold
                  all required or industry standard insurance, workers
                  compensation, and workplace safety, to adequately cover
                  property damage, bodily injury, theft, property loss in
                  amounts sufficient for your liability under your contract with
                  the Requesting User.
                </p>
              }
              name="industryStandardAgreement"
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
                      new Error(
                        "Please accept the Industry Standard agreement!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Checkbox {...field}>I agree and acknowledge</Checkbox>
            </Form.Item>
          )}
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            name="submit"
            loading={isLoading}
          >
            Create Company
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default BasinInfo;
