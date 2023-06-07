import { useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Form, Input, message, Upload } from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { useAntdMessageContext } from "@/contexts";
import { useSaveBookingDetails } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { Dragger } = Upload;
const { TextArea } = Input;

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

const SecondStep = ({ previous, next }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const cachedBookingDetails = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS,
  ]);

  // console.log({ cachedBookingDetails });

  const { saveBookingDetails, isLoading } = useSaveBookingDetails(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.CUSTOMER.BOOKING_DETAILS_SAVED
          ),
          next())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  const onSubmit = (bookingDetailsObj) => {
    return cachedBookingDetails
      ? saveBookingDetails(bookingDetailsObj, true)
      : saveBookingDetails(bookingDetailsObj, false);
  };

  return (
    <section>
      <Form
        name="jobDetails"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        autoComplete="off"
        initialValues={{}}
        className="flex flex-col gap-4"
        requiredMark="optional"
      >
        <Form.Item
          name="taskDescription"
          className="w-full"
          label={
            <h3 className="text-base lg:text-xl font-bold">
              What do you need done?
            </h3>
          }
          rules={[
            { required: true, message: "Please fill your requirements here!" },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="e.g. Something that needs to be fixed, installed or cleaned etc."
            showCount
          />
        </Form.Item>

        <Divider className="my-0" />

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
              Next
            </Button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default SecondStep;
