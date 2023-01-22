import { TimePicker } from "antd";
import dayjs from "dayjs";
const format = "HH:mm";

const BasicTimePicker = () => {
  return (
    <TimePicker
      status="error"
      defaultValue={dayjs("12:08", format)}
      format={format}
    />
  );
};

export default BasicTimePicker;
