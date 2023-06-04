import {
  GiAutoRepair,
  GiVacuumCleaner,
  GiWashingMachine,
} from "react-icons/gi";
import { BiCabinet } from "react-icons/bi";
import { BsFillTreeFill, BsSnow } from "react-icons/bs";

export const categories = [
  {
    name: "Cleaning",
    icon: <GiVacuumCleaner className="text-primary-100" size={32} />,
    label: "Cleaning",
  },
  {
    name: "Indoors",
    icon: <BiCabinet className="text-primary-100" size={32} />,
    label: "Indoors",
  },
  {
    name: "Install",
    icon: <GiWashingMachine className="text-primary-100" size={32} />,
    label: "Install",
  },
  {
    name: "Outdoors",
    icon: <BsFillTreeFill className="text-primary-100" size={32} />,
    label: "Outdoors",
  },
  {
    name: "Repair",
    icon: <GiAutoRepair className="text-primary-100" size={32} />,
    label: "Repair",
  },
  {
    name: "Seasonal",
    icon: <BsSnow className="text-primary-100" size={32} />,
    label: "Seasonal",
  },
];

export const subCategoriesList = [
  {
    id: 1,
    name: "Carpet & Upholstry Cleaning",
    image:
      "https://images.unsplash.com/photo-1569698134101-f15cde5cd66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categories: ["cleaning", "repair"],
  },
  {
    id: 2,
    name: "Appliance Install",
    image:
      "https://images.unsplash.com/photo-1645526816847-74a7640b8b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categories: ["indoors", "install"],
  },
  {
    id: 3,
    name: "Appliance Cleaning",
    image:
      "https://images.unsplash.com/photo-1601160458000-2b11f9fa1a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    categories: ["indoors", "cleaning"],
  },
  {
    id: 4,
    name: "Duct Cleaning",
    image:
      "https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    categories: ["indoors", "cleaning"],
  },
  {
    id: 5,
    name: "Electrical",
    image:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    categories: ["outdoors", "indoors", "repair"],
  },
  {
    id: 6,
    name: "Personal Care",
    image:
      "https://d2zdpiztbgorvt.cloudfront.net/region1/us/173102/biz_photo/a0c65af40bdf488c9ed98b92bd6780-roy-master-barber-biz-photo-c89d068112214cb2a81d03576c3b58-booksy.jpeg?size=640x427",
    categories: [],
  },
  {
    id: 7,
    name: "Locksmith",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    categories: ["outdoors", "repair"],
  },
  {
    id: 8,
    name: "Painting",
    image:
      "https://plus.unsplash.com/premium_photo-1661963975538-db20d2973e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80",
    categories: ["cleaning", "repair"],
  },
  {
    id: 9,
    name: "Moving & Delivery",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    categories: ["seasonal"],
  },
  {
    id: 10,
    name: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    categories: ["cleaning", "repair"],
  },
];
