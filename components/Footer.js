import Link from "next/link";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
const leftList = [
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "About us",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
  {
    label: "Privacy Policy",
    href: "/",
  },
];

const rightList = [
  {
    label: "Terms of Service",
    href: "/",
  },
  {
    label: "Careers",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export default function Footer() {
  return (
    <div className="bg-black p-6">
      <div className="border-b border-gray-500 flex justify-between sm:justify-start pb-6 text-xs">
        <ul className="text-gray-300 flex flex-col sm:flex-row">
          {leftList.map((footer) => {
            return (
              <li className="p-2" key={footer.label}>
                <Link href={footer.href}>
                  <a>{footer.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="text-gray-300 sm:text-right flex flex-col sm:flex-row">
          {rightList.map((footer) => {
            return (
              <li className="p-2" key={footer.label}>
                <Link href={footer.href}>
                  <a>{footer.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-5 flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Link href="/">
            <a className="inline-flex items-center">
              <span className="font-['Bebas_Neue'] text-3xl text-white font-bold uppercase tracking-wide">
                Techlance
              </span>
            </a>
          </Link>

          <div className="text-xs text-gray-300 sm:ml-8 py-2 sm:py-0">
            © 2022 Techlance Inc. All rights reserved
          </div>
        </div>

        <div className="flex justify-center items-center py-3 sm:py-0">
          <Link href="/">
            <a className="rounded-full bg-gray-200 text-black text-lg w-[40px] h-[40px] grid place-items-center mx-2">
              <BsInstagram />
            </a>
          </Link>
          <Link href="/">
            <a className="rounded-full bg-gray-200 text-black text-lg w-[40px] h-[40px] grid place-items-center mx-2">
              <BsTwitter />
            </a>
          </Link>
          <Link href="/">
            <a className="rounded-full bg-gray-200 text-black text-lg w-[40px] h-[40px] grid place-items-center mx-2">
              <BsFacebook />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
