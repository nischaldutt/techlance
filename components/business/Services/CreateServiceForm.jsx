import { useState } from "react";
import {
  Button,
  Input,
  InputNumber,
  Form,
  Select,
  Col,
  Row,
  Upload,
} from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { useServiceSubCategories, useCreateService } from "@/hooks";
import { useAntdMessageContext } from "@/contexts/AntdMessageContext";
import { APP_CONSTANTS } from "@/constants";

const { Dragger } = Upload;

const props = {
  name: "files",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    console.log({ info });

    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log({ dropped: e.dataTransfer.files });
  },
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

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
    <section className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0 pt-6 py-3">
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

        <Form.Item
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          label={
            <h3 className="text-base lg:text-xl font-bold">Upload Photos</h3>
          }
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon flex justify-center">
              <AiOutlineCloudUpload className="text-6xl" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
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
