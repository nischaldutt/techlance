import React from "react";
import { useRouter } from "next/router";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";
import { useQueryClient } from "@tanstack/react-query";

import {
  useAntdMessageContext,
  useBusinessRegistrationDispatchContext,
} from "@/contexts";
import { useBusinessBasicInfo } from "@/hooks";
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

const BasinInfo = ({ jobData, updateJobData, next }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [form] = Form.useForm();
  const { control, handleSubmit } = useReactHookForm();
  const { messageApi } = useAntdMessageContext();
  // const { dispatch } = useBusinessRegistrationDispatchContext();

  const cachedData = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
  ]);

  const successMessage = (successMsg) => {
    messageApi.open({
      type: "success",
      content: successMsg || "Account created successfully!",
    });
  };

  const errorMessage = (errorMsg) => {
    messageApi.open({
      type: "error",
      content: errorMsg || "Something went wrong!",
    });
  };

  const { mutate: createBusiness, isLoading } = useBusinessBasicInfo(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(response?.message), next())
        : errorMessage(response);
    }
  );

  function onSubmit(data) {
    // console.log({ cachedData, data, merged: { ...cachedData, ...data } });
    return cachedData
      ? createBusiness({ ...cachedData, ...data })
      : createBusiness(data);
  }

  return (
    <section className="w-96">
      <Form
        name="basicInfo"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
        initialValues={cachedData}
        requiredMark="optional"
      >
        <Controller
          name="businessName"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Business Name"
              name="businessName"
              rules={[
                {
                  required: true,
                  message: "eg. TechLance",
                },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="businessAddress"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Business Address"
              name="businessAddress"
              rules={[
                {
                  required: true,
                  message: "eg. 123 BayView Street, Calgary",
                },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="businessUnits"
          control={control}
          render={({ field }) => (
            <Form.Item
              {...smallFormItemLayout}
              label="Units/Suites"
              name="businessUnits"
              rules={[
                {
                  // required: true,
                  message: "eg. 4",
                },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="businessHst"
          control={control}
          render={({ field }) => (
            <Form.Item
              {...smallFormItemLayout}
              label="HST Number"
              name="businessHst"
              rules={[
                {
                  required: true,
                  message: "eg. 12345",
                },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="businessWebsite"
          control={control}
          render={({ field }) => (
            <Form.Item label="Website" name="businessWebsite">
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
            <Form.Item name="industryStandardAgreement" valuePropName="checked">
              <div className="flex flex-col gap-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-justify">
                  By checking this box you represent and warrant that you hold
                  all required or industry standard insurance, workers
                  compensation, and workplace safety, to adequately cover
                  property damage, bodily injury, theft, property loss in
                  amounts sufficient for your liability under your contract with
                  the Requesting User.
                </p>
                <Checkbox {...field}>I agree and acknowledge</Checkbox>
              </div>
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
