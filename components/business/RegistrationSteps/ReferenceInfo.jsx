import { Button, Form, Input } from "antd";

import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useCreateBusinessReferences } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

// todo_: ask to send the error in the response when a single user that already has business tries to create another business
const ReferenceInfo = ({ previous, done }) => {
  const [referenceForm1] = Form.useForm();
  const [referenceForm2] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  const cachedRefrenceInfo = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_REFERENCES
  );

  const { createBusinessReferences, isLoading } = useCreateBusinessReferences(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.BUSINESS.REFERENCES_ADDED
          ),
          done())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  function onSubmit() {
    let referenceInfo = [];

    referenceForm1
      .validateFields()
      .then((firstReferenceValues) => {
        referenceInfo.push(firstReferenceValues);

        if (!!referenceForm2.getFieldValue("fullName")) {
          referenceForm2
            .validateFields()
            .then((secondReferenceValues) => {
              referenceInfo.push(secondReferenceValues);
              // return console.log({ sec: referenceInfo });
              return createBusinessReferences(referenceInfo);
            })
            .catch((secondRefError) => {
              console.log(
                "error in validating second reference",
                secondRefError
              );
            });
        } else {
          // return console.log({ first: referenceInfo });
          return createBusinessReferences(referenceInfo);
        }
      })
      .catch((firstRefError) => {
        console.log("error in validating first reference", firstRefError);
      });
  }

  return (
    <section className="w-96">
      <ReferenceForm
        formLabel="1st Reference*"
        name="referenceInfo1"
        form={referenceForm1}
        initialValues={cachedRefrenceInfo?.[0] || {}}
      />

      <ReferenceForm
        formLabel="2nd Reference (Optional)"
        name="referenceInfo2"
        form={referenceForm2}
        initialValues={cachedRefrenceInfo?.[1] || {}}
      />

      <div className="flex justify-between">
        <Button
          type="primary"
          size="large"
          disabled={isLoading}
          onClick={() => previous()}
        >
          Previous
        </Button>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          name="submit"
          loading={isLoading}
          onClick={onSubmit}
        >
          Save & Continue
        </Button>
      </div>
    </section>
  );
};

export default ReferenceInfo;

function ReferenceForm({ formLabel, name, form, initialValues }) {
  return (
    <Form
      name={name}
      form={form}
      layout="vertical"
      autoComplete="off"
      initialValues={initialValues}
      requiredMark="optional"
      validateTrigger="onBlur"
    >
      <h1 className="text-lg font-bold pb-4">{formLabel}</h1>

      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Name",
          },
          {
            min: 3,
            message: "Name must be at least 3 characters long!",
          },
        ]}
      >
        <Input placeholder="eg. John Doe" />
      </Form.Item>
      <Form.Item
        label="Relationship"
        name="relationship"
        rules={[
          {
            required: true,
            message: "Relationship",
          },
          {
            min: 3,
            message: "Relationship must be at least 3 characters long",
          },
        ]}
      >
        <Input placeholder="eg. Business Partner" />
      </Form.Item>
      <Form.Item
        label="Company"
        name="company"
        rules={[
          {
            required: true,
            message: "Company name is required!",
          },
        ]}
      >
        <Input placeholder="eg. The Beetles" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "test@gmail.com",
          },
          { type: "email", message: "Invalid email" },
        ]}
      >
        <Input placeholder="eg. john.doe@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Phone is required!",
          },
        ]}
      >
        <Input placeholder="eg. 1234567890" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Description is required!",
          },
        ]}
      >
        <TextArea
          rows={4}
          placeholder="Tell us how you know each other and the reason why you chose this person as your reference."
        />
      </Form.Item>
    </Form>
  );
}
