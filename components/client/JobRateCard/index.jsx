import React from "react";
import Link from "next/link";
import { Divider, Tooltip } from "antd";

import { AiOutlineInfoCircle, AiFillCreditCard } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";

const list = [
  {
    id: 1,
    Icon: <HiCheckCircle className="text-lg text-primary-100" />,
    text: "Single user license",
    toolTipDesc:
      "For larger jobs (think $500+), our professionals are happy to provide a free, flat-rate quote. Simply request that you'd like a free quote in the job description. Your credit card is still required to submit the request, but rest assured nothing is charged until after the job is complete.",
  },
  {
    id: 2,
    Icon: <HiCheckCircle className="text-lg text-primary-100" />,
    text: "Single user license",
    toolTipDesc:
      "For larger jobs (think $500+), our professionals are happy to provide a free, flat-rate quote. Simply request that you'd like a free quote in the job description. Your credit card is still required to submit the request, but rest assured nothing is charged until after the job is complete.",
  },
  {
    id: 3,
    Icon: <HiCheckCircle className="text-lg text-primary-100" />,
    text: "Single user license",
    toolTipDesc:
      "For larger jobs (think $500+), our professionals are happy to provide a free, flat-rate quote. Simply request that you'd like a free quote in the job description. Your credit card is still required to submit the request, but rest assured nothing is charged until after the job is complete.",
  },
];

const JobRateCard = () => {
  return (
    <div className="border-[3px] border-primary-100 rounded-lg p-4 shadow-xl">
      <div className="flex">
        <h1 className="text-4xl font-bold text-primary-100">$99</h1>

        <div className="text-sm pt-1 pl-2">
          <p className="font-bold">one time payment</p>
          <p className="">+ local taxes</p>
        </div>
      </div>

      <Divider className="py-0 my-0 border-gray-200" />

      <article className="py-4">
        <h2 className="font-bold text-lg text-primary-100">Book Job</h2>
        <p className="text-xs text-gray-700 text-justify">
          Once your job is accepted, your professional will be in touch, and if
          possible, will give a quick idea of scope prior to arrival.
        </p>

        <div className="py-4">
          <ul className="flex flex-col gap-2">
            {list.map((item) => {
              return <ListItem key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </article>

      <div className="flex gap-2 items-end">
        <AiFillCreditCard className="text-primary-100" />
        <p className="text-[10px] text-gray-700">
          You wont be charged until the job is complete
        </p>
      </div>
    </div>
  );
};

export default JobRateCard;

function ListItem({ item }) {
  const { Icon, text, toolTipDesc } = item;

  return (
    <li className="flex gap-2 items-end">
      {Icon}
      <p className="text-xs font-bold text-gray-700">{text}</p>
      <Tooltip placement="top" title={toolTipDesc} arrow={true}>
        <AiOutlineInfoCircle className="text-lg text-gray-700" />
      </Tooltip>
    </li>
  );
}
