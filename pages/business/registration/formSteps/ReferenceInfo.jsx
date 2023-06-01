import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";
import { useQueryClient } from "@tanstack/react-query";

import { useAntdMessageContext } from "@/contexts";
import { useCreateBusinessInsurance } from "@/hooks";
import { mergeObjects } from "@/utils";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const ReferenceInfo = ({ jobData, onEdit, previous, next }) => {
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

  const { mutate: createBusiness, isLoading } = useCreateBusinessInsurance(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(response?.message), next())
        : errorMessage(response);
    }
  );

  function onSubmit(data) {
    console.log({ data });
    // return cachedInsuranceData
    //   ? createBusiness(mergeObjects(cachedInsuranceData, data))
    //   : createBusiness(data);
  }

  return (
    <section className="w-96">
      {/* <Form
        name="referenceInfo"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(onSubmit)}
        autoComplete="off"
        initialValues={{}}
        requiredMark="optional"
      > */}
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          console.log({ name, values, forms });
        }}
      >
        <ReferenceForm
          formLabel="1st Reference"
          name="referenceInfo1"
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />

        <ReferenceForm
          formLabel="2nd Reference"
          name="referenceInfo2"
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />

        <Form.Item>
          <Button type="primary" size="large" onClick={() => previous()}>
            Previous
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Save & Continue
          </Button>
        </Form.Item>
      </Form.Provider>
      {/* </Form> */}
    </section>
  );
};

export default ReferenceInfo;

function ReferenceForm({
  formLabel,
  formName,
  control,
  handleSubmit,
  onSubmit,
}) {
  const [form] = Form.useForm();

  return (
    <Form
      name={formName}
      form={form}
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
      initialValues={{}}
      requiredMark="optional"
    >
      <h1 className="text-lg font-bold pb-4">{formLabel}</h1>

      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Name",
              },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="relationship"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Relationship"
            name="relationship"
            rules={[
              {
                required: true,
                message: "Relationship",
              },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Company"
            name="company"
            rules={[
              {
                required: true,
                message: "Company",
              },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "test@gmail.com",
              },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "1234567890",
              },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Form.Item label="Description" name="description">
            <TextArea
              {...field}
              rows={4}
              placeholder="Tell us how you know each other and the reason why you chose this person as your reference."
              minLength={6}
            />
          </Form.Item>
        )}
      />

      {/* <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Save & Continue
        </Button>
      </Form.Item> */}
    </Form>
  );
}
