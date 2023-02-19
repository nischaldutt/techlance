import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Divider,
  DatePicker,
  Form,
  Input,
  Space,
  TimePicker,
  Row,
  Col,
  message,
  Upload,
} from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";

const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
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
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const SecondStep = ({ jobData, updateJobData, next, previous }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    next();
  };

  return (
    <section>
      <Form
        name="dynamic_form_item"
        onFinish={onSubmit}
        className="flex flex-col gap-4"
        layout="vertical"
      >
        <Form.Item
          label={
            <h3 className="text-base lg:text-xl font-bold">
              What do you need done?
            </h3>
          }
        >
          <TextArea
            rows={4}
            placeholder="e.g. Something that needs to be fixed, installed or cleaned etc."
            // maxLength={5000}
            // showCount
          />
        </Form.Item>

        <Divider className="my-0" />

        <Form.Item
          label={
            <h3 className="text-base lg:text-xl font-bold">
              Upload Photos (Optional)
            </h3>
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

        <Row>
          <Col span={6} className="flex justify-between">
            <Button type="default" size="large" onClick={previous}>
              Previous
            </Button>
            <Button type="primary" size="large" onClick={onSubmit}>
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default SecondStep;
