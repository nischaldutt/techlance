import dayjs from "dayjs";
import { Button, Form, Input, Space, Switch } from "antd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

import { ClientDateTimeInputs } from "@/components";
import { useAntdMessageContext, useQueryCacheContext } from "@/contexts";
import { useCreateBookingSchedule } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const FirstStep = ({ next }) => {
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();
  const { getQueryFromCache } = useQueryCacheContext();

  const cachedBookingScheduleInfo = getQueryFromCache(
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE
  );

  const initial = !cachedBookingScheduleInfo
    ? {}
    : {
        earliestDateAvailable: true,
        description: "initial",
        timeSlots: cachedBookingScheduleInfo?.availableDates.map((slot) => {
          return {
            date: dayjs(slot.bookingDate, "YYYY-MM-DD"),
            timeIds: [2, 3],
          };
        }),
      };

  const { createBookingSchedule, isLoading } = useCreateBookingSchedule(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.CUSTOMER.BOOKING_REQUEST_SCHEDULED
          ),
          next())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  const onSubmit = ({ earliestDateAvailable, timeSlots, description }) => {
    const formattedTimeSlots = timeSlots.map((slot) => {
      return {
        date: slot.date.format("YYYY-MM-DD"),
        timeIds: slot.timeIds,
      };
    });

    const reqBody = {
      earliestDateAvailable,
      description,
      timeSlots: formattedTimeSlots,
      serviceId: APP_CONSTANTS.DUMMY_SERVICE_ID,
      businessId: APP_CONSTANTS.DUMMY_BUSINESS_ID,
    };

    return cachedBookingScheduleInfo
      ? createBookingSchedule({
          ...reqBody,
          bookingId: cachedBookingScheduleInfo?.bookingId,
        })
      : createBookingSchedule(reqBody);
  };

  return (
    <section>
      <Form
        name="scheduleInfo"
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        autoComplete="off"
        initialValues={initial || {}}
        className="flex flex-col gap-4"
        requiredMark="optional"
      >
        <h2 className="text-base lg:text-lg font-bold">
          When should we send someone?
        </h2>

        <Form.List
          name="timeSlots"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(
                    new Error("Please select date and time")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map(({ key, name, ...restParams }) => (
                <Space key={key} align="baseline">
                  <ClientDateTimeInputs name={name} {...restParams} />

                  {fields.length > 1 ? (
                    <GrSubtractCircle
                      className="dynamic-delete-button ml-4 scale-125"
                      onClick={() => remove(name)}
                    />
                  ) : null}
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<AiOutlinePlusCircle className="mr-2" />}
                  className="flex justify-between items-center h-10"
                >
                  Select Date and Time
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
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
          <Switch defaultChecked={false} />
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
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default FirstStep;
