import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import {
  Alert,
  Button,
  Divider,
  DatePicker,
  Form,
  Input,
  Space,
  TimePicker,
  Row,
  Col,
  Card,
  Collapse,
} from "antd";
import { AiFillCreditCard } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

import { useAntdMessageContext } from "@/contexts";
import { useSaveBookingDetails } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";

const { Panel } = Collapse;

const ThirdStep = ({ jobData, done, onEdit }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const cachedBookingDetails = queryClient.getQueryData([
    APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS,
  ]);

  // console.log({ cachedBookingDetails });

  const { confirmBooking, isLoading } = useSaveBookingDetails(
    (isSuccess, response) => {
      return isSuccess
        ? (successMessage(
            response?.message ||
              APP_CONSTANTS.MESSAGES.CUSTOMER.BOOKING_CONFIRMED
          ),
          next())
        : errorMessage(response || APP_CONSTANTS.MESSAGES.ERROR);
    }
  );

  const onSubmit = (bookingDetailsObj) => {
    // return cachedBookingDetails
    //   ? confirmBooking(bookingDetailsObj, true)
    //   : confirmBooking(bookingDetailsObj, false);
  };

  return (
    <section>
      <Card title="Appliance Install" bordered>
        <section className="flex flex-col gap-4">
          <Row gutter={[16, 24]}>
            <Col>
              <DatePicker
                defaultValue={dayjs("2015-06-06")}
                disabled
                className="w-36"
              />
            </Col>
            <Col>
              <TimePicker
                defaultValue={dayjs("12:08", "HH:mm")}
                format="HH:mm"
                disabled
                className="w-36"
              />
            </Col>
          </Row>

          <Divider className="my-0" />

          <Row gutter={[16, 24]}>
            <Col>
              <DatePicker
                defaultValue={dayjs("2015-06-06")}
                disabled
                className="w-36"
              />
            </Col>
            <Col>
              <TimePicker
                defaultValue={dayjs("12:08", "HH:mm")}
                format="HH:mm"
                disabled
                className="w-36"
              />
            </Col>
          </Row>

          <div className="flex gap-4">
            <HiLocationMarker size={20} />
            900 Dufferin Street, Toronto, ON
          </div>

          <Collapse accordion bordered={false}>
            <Panel header="Job Description" key="1">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
          </Collapse>
        </section>
      </Card>

      <Divider />

      <Form
        name="dynamic_form_item"
        onFinish={onSubmit}
        className="flex flex-col gap-4"
        layout="vertical"
      >
        <h3 className="text-base lg:text-xl font-bold">
          Credit Card Information
        </h3>

        <Space align="center" wrap>
          <Form.Item label="Card number">
            <Input placeholder="1234 1234 1234 1234" size="large" />
          </Form.Item>
          <Form.Item label="Expiration Date">
            <Input placeholder="MM/YY" size="large" />
          </Form.Item>
          <Form.Item label="CVC">
            <Input placeholder="CVC" size="large" />
          </Form.Item>
          <Button type="primary" size="large">
            Add
          </Button>
        </Space>

        <Alert
          message={
            <p className="text-xs">
              You wont be charged until the job is complete
            </p>
          }
          type="info"
          showIcon
          icon={<AiFillCreditCard />}
        />

        <Divider />

        <Form.Item>
          <Button type="primary" size="large" block onClick={done}>
            Book Now
          </Button>
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item>
              <Button size="large" block onClick={onEdit}>
                <div className="flex justify-center items-center gap-2">
                  <MdModeEditOutline />
                  Edit Job
                </div>
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Button size="large" block danger>
                <div className="flex justify-center items-center gap-2">
                  <GiCancel />
                  Cancel Job
                </div>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default ThirdStep;
