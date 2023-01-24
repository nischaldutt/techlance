import { TimePicker } from "antd";
import dayjs from "dayjs";
const format = "HH:mm";

const BasicTimePicker = () => {
  return (
    <TimePicker
      className="px-4 py-2 text-lg"
      defaultValue={dayjs("12:08", format)}
      format={format}
    />
  );
};

export default BasicTimePicker;
