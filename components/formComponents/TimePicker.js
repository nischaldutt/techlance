import { TimePicker } from "antd";
import dayjs from "dayjs";
const format = "HH:mm";

const BasicTimePicker = () => {
  return (
    <TimePicker
      className="w-36 h-10 text-lg"
      // defaultValue={dayjs("12:08", format)}
      format={format}
    />
  );
};

export default BasicTimePicker;
