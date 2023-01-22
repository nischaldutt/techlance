import { DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const BasicDatePicker = () => {
  return <DatePicker status="error" onChange={onChange} />;
};

export default BasicDatePicker;
