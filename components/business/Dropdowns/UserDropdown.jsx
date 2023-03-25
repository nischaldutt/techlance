import React from "react";
import Image from "next/image";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
        className="text-slate-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="relative w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
            <Image
              src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/173102/biz_photo/a0c65af40bdf488c9ed98b92bd6780-roy-master-barber-biz-photo-c89d068112214cb2a81d03576c3b58-booksy.jpeg?size=640x427"
              alt="..."
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-[1000] float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-slate-100" />
        <a
          href="#pablo"
          className={
            "text-sm font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Separated link
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
