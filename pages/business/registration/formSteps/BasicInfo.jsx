import React from "react";
import { useRouter } from "next/router";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";

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
  const router = useRouter();
  const [form] = Form.useForm();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useReactHookForm();
  const { messageApi } = useAntdMessageContext();
  // const { dispatch } = useBusinessRegistrationDispatchContext();

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
    (isSuccess, message) => {
      return isSuccess
        ? (successMessage(message), next())
        : errorMessage(message);
    }
  );

  const onSubmit = (data) => {
    const {
      businessName,
      businessAddress,
      businessUnits,
      businessHst,
      businessWebsite,
      discoverDescription,
      industryStandardAgreement,
    } = data;

    const basicInfo = {
      name: businessName,
      address: businessAddress,
      hst: businessHst,
      unit: businessUnits,
      website: businessWebsite,
      discoverDescription: discoverDescription,
      industryStandardAgreement: !!industryStandardAgreement,
    };

    // next();
    // return dispatch({
    //   type: APP_CONSTANTS.REDUCER_ACTION_TYPES.BUSINESS_REGISTRATION
    //     .ADD_BASIC_INFO,
    //   payload: basicInfo,
    // });

    return createBusiness(basicInfo);
  };

  return (
    <section className="w-96">
      <Form
        name="basicInfo"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
        initialValues={{}}
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
                <Checkbox onClick={(e) => e.target.checked} {...field}>
                  I agree and acknowledge
                </Checkbox>
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
