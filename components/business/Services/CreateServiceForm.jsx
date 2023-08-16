import { useState } from "react";
import { Button, Input, InputNumber, Form, Select, Col, Row } from "antd";

import { useServiceSubCategories, useCreateService } from "@/hooks";
import { useAntdMessageContext } from "@/contexts/AntdMessageContext";
import { APP_CONSTANTS } from "@/constants";

const CreateServiceForm = ({ categories, refetchServices }) => {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const [categoryId, setCategoryId] = useState();
  const { subCategories, isSuccess, isFetching } =
    useServiceSubCategories(categoryId);

  if (isSuccess) {
    subCategories = subCategories?.map((subCategory) => {
      return {
        value: subCategory?.id,
        label: subCategory?.name,
      };
    });
  }

  const { createService, isLoading } = useCreateService(
    (isSuccess, message) => {
      return isSuccess
        ? (successMessage(
            message || APP_CONSTANTS.MESSAGES.AUTH.SIGNUP_SUCCESS
          ),
          form.resetFields(),
          refetchServices())
        : errorMessage(message || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  function onSubmit(data) {
    const reqBody = {
      name: data?.name,
      description: data?.description,
      status: true,
      price: data?.price,
      subCategoryId: data?.subCategoryId,
      businessId: 98,
    };

    return createService(reqBody);
  }

  return (
    <section className="relative flex flex-col min-w-0 break-words w-full h-[50vh] mb-6 shadow-lg rounded-lg bg-white border-0 pt-6 py-3">
      <h2 className="mx-6 uppercase underline-offset-8 font-bold">
        Create New Service
      </h2>

      <Form
        name="createNewService"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        className="m-6"
      >
        <Form.Item
          name="name"
          label="Service Name"
          rules={[
            { required: true, message: "Please enter the Service Name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Service Description"
          rules={[
            {
              required: true,
              message: "Please enter the Service Description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Row>
          <Col span={8}>
            <Form.Item
              name="categoryId"
              label="Category"
              rules={[
                {
                  required: true,
                  message: "Please select the Service Category!",
                },
              ]}
            >
              <Select
                placeholder="Select Category"
                style={{
                  width: 240,
                }}
                options={categories}
                onChange={(id) => {
                  setCategoryId(() => id);
                  form.setFieldValue("subCategoryId", null);
                }}
              />
            </Form.Item>
          </Col>

          <Col span={8} offset={5}>
            <Form.Item
              name="subCategoryId"
              label="Sub-Category"
              rules={[
                {
                  required: true,
                  message: "Please select the Service Sub-Category!",
                },
              ]}
            >
              <Select
                placeholder="Select Sub-Category"
                style={{
                  width: 240,
                }}
                options={subCategories}
                loading={isFetching}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please enter the Price!",
            },
          ]}
        >
          <InputNumber min={1} addonAfter="$ per hr" />
        </Form.Item>

        <Form.Item className="py-4">
          <Button
            type="primary"
            htmlType="submit"
            name="submit"
            loading={isLoading}
          >
            Create Service
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default CreateServiceForm;
