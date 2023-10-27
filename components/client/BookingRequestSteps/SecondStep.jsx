import { useState } from "react";
import { Button, Divider, Form, Input } from "antd";

import { FileUpload } from "@/components";
import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useSaveBookingDetails } from "@/hooks";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const SecondStep = ({ previous, next }) => {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isFileUploading, setIsFileUploading] = useState(false);

  const cachedBookingDetails = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS
  );

  const uploadedImages = !cachedBookingDetails
    ? []
    : cachedBookingDetails?.images?.map((image) => {
        return {
          response: { data: image },
          thumbUrl: image?.imageUrl,
        };
      });

  console.log({ cachedBookingDetails });
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

  const onSubmit = (data) => {
    const reqBody = {
      taskDescription: data?.taskDescription,
      files: uploadedFiles.length
        ? uploadedFiles
        : cachedBookingDetails?.images,
      serviceId: APP_CONSTANTS.DUMMY_SERVICE_ID,
      businessId: APP_CONSTANTS.DUMMY_BUSINESS_ID,
    };

    return cachedBookingDetails
      ? saveBookingDetails(reqBody, true)
      : saveBookingDetails(reqBody, false);
  };

  return (
    <section>
      <Form
        name="jobDetails"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        autoComplete="off"
        initialValues={cachedBookingDetails || {}}
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
          label={
            <h3 className="text-base lg:text-xl font-bold">Upload Photos</h3>
          }
        >
          <FileUpload
            images={uploadedImages}
            uploadUrl={`${process.env.NEXT_PUBLIC_BACKEND_API}${URL_CONSTANTS.SINGLE_FILE_UPLOAD}`}
            limit={5}
            getUploadedFiles={(files, isUploading) => {
              setUploadedFiles(files);
              setIsFileUploading(isUploading);
            }}
          />
        </Form.Item>

        <div className="flex justify-between">
          <Form.Item>
            <Button
              type="primary"
              size="large"
              disabled={isFileUploading || isLoading}
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
              disabled={isFileUploading}
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
