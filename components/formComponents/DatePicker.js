import { DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const BasicDatePicker = () => {
  return <DatePicker className="w-36 h-10 text-lg" onChange={onChange} />;
};

export default BasicDatePicker;
