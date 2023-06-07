import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Divider,
  DatePicker,
  Form,
  Input,
  Space,
  Checkbox,
  Switch,
} from "antd";
import dayjs from "dayjs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

import { useAntdMessageContext } from "@/contexts";
import { useCreateBookingSchedule } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { TextArea } = Input;

const FirstStep = ({ next }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const cachedBookingScheduleData = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE,
  ]);

  console.log({ cachedBookingScheduleData });

  const initial = !cachedBookingScheduleData
    ? {}
    : {
        earliestDateAvailable: false,
        description: "initial",
        timeSlots: cachedBookingScheduleData?.availableDates.map((slot) => {
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

    const bookingScheduleObj = {
      earliestDateAvailable,
      description,
      timeSlots: formattedTimeSlots,
    };

    return cachedBookingScheduleData
      ? createBookingSchedule({
          ...bookingScheduleObj,
          bookingId: cachedBookingScheduleData?.bookingId,
        })
      : createBookingSchedule(bookingScheduleObj);
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
                  <DateTimeInputs name={name} {...restParams} />

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

function DateTimeInputs({ name, ...restParams }) {
  return (
    <>
      <Space align="baseline" wrap>
        <Form.Item
          {...restParams}
          name={[name, "date"]}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Missing Date",
            },
          ]}
        >
          <DatePicker className="w-36 h-10 text-lg" format="YYYY-MM-DD" />
        </Form.Item>

        <div className="px-2"></div>

        <Form.Item
          {...restParams}
          name={[name, "timeIds"]}
          rules={[
            {
              required: true,
              message: "Missing Time",
            },
          ]}
        >
          <Checkbox.Group>
            <Checkbox value={1}>Morning</Checkbox>
            <Checkbox value={2}>Afternoon</Checkbox>
            <Checkbox value={3}>Evening</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Space>

      <Divider className="my-2" />
    </>
  );
}
