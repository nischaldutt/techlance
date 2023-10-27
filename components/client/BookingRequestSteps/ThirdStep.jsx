import { Button, Divider, Form, Input, Space, Switch, Image } from "antd";

import { ClientDateTimeInputs } from "@/components";
import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useConfirmBooking } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const ThirdStep = ({ previous, done }) => {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  const cachedBookingScheduleData = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE
  );

  const cachedBookingDetails = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS
  );

  const uploadedImages = !cachedBookingDetails?.images
    ? []
    : cachedBookingDetails?.images?.map((image) => image?.imageUrl);

  const { confirmBooking, isLoading } = useConfirmBooking(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.CUSTOMER.BOOKING_CONFIRMED
          ),
          done())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  return (
    <section>
      <Form
        name="confirmBooking"
        form={form}
        layout="vertical"
        onFinish={confirmBooking}
        autoComplete="off"
        initialValues={
          {
            ...cachedBookingScheduleData,
            ...cachedBookingDetails,
          } || {}
        }
        className="flex flex-col gap-4"
        requiredMark="optional"
      >
        <h2 className="text-base lg:text-lg font-bold">
          When should we send someone?
        </h2>

        <Form.List name="timeSlots">
          {(fields) => (
            <>
              {fields.map(({ key, name, ...restParams }) => (
                <Space key={key} align="baseline">
                  <ClientDateTimeInputs
                    name={name}
                    isDisabled={true}
                    {...restParams}
                  />
                </Space>
              ))}
            </>
          )}
        </Form.List>

        <Form.Item
          name="earliestDateAvailable"
          valuePropName="checked"
          label={
            <h4 className="text-base lg:text-xl font-bold">
              I&apos;m Flexible
            </h4>
          }
        >
          <Switch defaultChecked={false} disabled={true} />
        </Form.Item>

        <Form.Item
          name="description"
          className="w-full"
          label={
            <h4 className="text-base lg:text-xl font-bold">
              Timing Constraints
            </h4>
          }
        >
          <TextArea
            rows={4}
            placeholder="e.g. Baby is napping from 3 to 4 PM. Please do not arrive during those times."
            showCount
            disabled={true}
          />
        </Form.Item>

        <Form.Item
          name="taskDescription"
          className="w-full"
          label={
            <h3 className="text-base lg:text-xl font-bold">
              What do you need done?
            </h3>
          }
        >
          <TextArea
            rows={4}
            placeholder="e.g. Something that needs to be fixed, installed or cleaned etc."
            showCount
            disabled={true}
          />
        </Form.Item>

        <Divider className="my-0" />

        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <div className="flex gap-4">
            {uploadedImages?.map((image) => {
              return <Image key={image} alt="" width={200} src={image} />;
            })}
          </div>
        </Image.PreviewGroup>

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
              Confirm Booking
            </Button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default ThirdStep;
