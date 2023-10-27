import { Button, Form, Input, Checkbox, Select } from "antd";

import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useCreateBusinessBasicInfo, useStates } from "@/hooks";
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
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  // fetching states on the client rather than on the server
  const { states, isFetching } = useStates();
  const statesList = states?.map((state) => {
    return {
      value: state?.id,
      label: state?.name,
    };
  });

  const cachedBasicInfo = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO
  );

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
    return cachedBasicInfo
      ? createBusiness(mergeObjects(cachedBasicInfo, basicInfo))
      : createBusiness(basicInfo);
  }

  return (
    <section className="w-96">
      <Form
        name="basicInfo"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        autoComplete="off"
        initialValues={cachedBasicInfo}
        requiredMark="optional"
      >
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
          <Input placeholder="eg. Techlance" />
        </Form.Item>

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
              message: "Business address must be at least 10 characters long!",
            },
          ]}
        >
          <Input placeholder="eg. 123 BayView Street, Calgary" />
        </Form.Item>

        <Form.Item
          name="stateId"
          label="State"
          rules={[
            {
              required: true,
              message: "Please select state!",
            },
          ]}
        >
          <Select
            placeholder="Select State"
            options={statesList}
            loading={isFetching}
          />
        </Form.Item>

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
          <Input placeholder="eg. 4" />
        </Form.Item>

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
          <Input placeholder="eg. 12345" />
        </Form.Item>

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
          <Input addonBefore="https://" />
        </Form.Item>

        <Form.Item
          label="Where did you learn about us?"
          name="discoverDescription" // todo_: ask to change the field name same in both req and res
        >
          <TextArea
            rows={4}
            placeholder="eg. Tell us about where did you learn about us?"
            minLength={6}
          />
        </Form.Item>

        <Form.Item
          label={
            <p className="text-justify">
              By checking this box you represent and warrant that you hold all
              required or industry standard insurance, workers compensation, and
              workplace safety, to adequately cover property damage, bodily
              injury, theft, property loss in amounts sufficient for your
              liability under your contract with the Requesting User.
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
                  new Error("Please accept the Industry Standard agreement!")
                );
              },
            }),
          ]}
        >
          <Checkbox>I agree and acknowledge</Checkbox>
        </Form.Item>

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
