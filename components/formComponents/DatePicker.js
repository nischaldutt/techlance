import { DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const BasicDatePicker = () => {
  return <DatePicker className="px-4 py-3 text-lg" onChange={onChange} />;
};

export default BasicDatePicker;
