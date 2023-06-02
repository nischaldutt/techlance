import { useQueryClient } from "@tanstack/react-query";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";

import React from "react";
import { useAntdMessageContext } from "@/contexts";
import { useCreateBusinessReferences } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

// todo: perform clean up using removeQueries in the last step of business creation
const ReferenceInfo = ({ previous, next, done }) => {
  const queryClient = useQueryClient();
  const [referenceForm1] = Form.useForm();
  const [referenceForm2] = Form.useForm();
  const { messageApi } = useAntdMessageContext();

  const cacheReferencesData = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_REFERENCE,
  ]);

  const successMessage = (successMsg) => {
    messageApi.open({
      type: "success",
      content: successMsg || APP_CONSTANTS.MESSAGES.REFERENCES_ADDED,
    });
  };

  const errorMessage = (errorMsg) => {
    messageApi.open({
      type: "error",
      content: errorMsg || APP_CONSTANTS.MESSAGES.ERROR,
    });
  };

  const { mutate: createBusinessReferences, isLoading } =
    useCreateBusinessReferences((isSuccess, response) => {
      return isSuccess
        ? (successMessage(response?.message), done())
        : errorMessage(response);
    });

  function onSubmit() {
    const referenceInfo = [
      referenceForm1.getFieldsValue(),
      referenceForm2.getFieldsValue(),
    ];

    return createBusinessReferences(referenceInfo);
  }

  return (
    <section className="w-96">
      <ReferenceForm
        formLabel="1st Reference"
        name="referenceInfo1"
        form={referenceForm1}
        onSubmit={onSubmit}
        previous={previous}
        isLoading={isLoading}
        initialValues={cacheReferencesData?.[0] || {}}
      />

      <ReferenceForm
        formLabel="2nd Reference"
        name="referenceInfo2"
        form={referenceForm2}
        onSubmit={onSubmit}
        previous={previous}
        isLoading={isLoading}
        initialValues={cacheReferencesData?.[1] || {}}
      />
    </section>
  );
};

export default ReferenceInfo;

function ReferenceForm({
  formLabel,
  name,
  form,
  onSubmit,
  previous,
  isLoading,
  initialValues,
}) {
  const { control, handleSubmit } = useReactHookForm();

  return (
    <Form
      name={name}
      form={form}
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
      initialValues={initialValues}
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

      {name === "referenceInfo2" && (
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
      )}
    </Form>
  );
}
