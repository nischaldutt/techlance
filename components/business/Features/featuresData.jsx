import react from "react";
import { BiNetworkChart } from "react-icons/bi";
import { BsPhoneVibrate } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const featuresData = [
  {
    id: 1,
    icon: <BiNetworkChart size={32} />,
    title: "ACCESS OUR NETWORK",
    paragraph:
      "After the job is complete, simply enter the job details in the app, and an invoice is automatically generated with their payment deposited to your account 4 days later.",
  },
  {
    id: 2,
    icon: <BsPhoneVibrate size={32} />,
    title: "JOB ALERTS",
    paragraph:
      "After the job is complete, simply enter the job details in the app, and an invoice is automatically generated with their payment deposited to your account 4 days later.",
  },
  {
    id: 3,
    icon: <TbFileInvoice size={32} />,
    title: "EFFORTLESS INVOICING",
    paragraph:
      "After the job is complete, simply enter the job details in the app, and an invoice is automatically generated with their payment deposited to your account 4 days later.",
  },
  {
    id: 4,
    icon: <RiMoneyDollarCircleLine size={32} />,
    title: "NO UPFRONT FEES",
    paragraph:
      "After the job is complete, simply enter the job details in the app, and an invoice is automatically generated with their payment deposited to your account 4 days later.",
  },
];
export default featuresData;
