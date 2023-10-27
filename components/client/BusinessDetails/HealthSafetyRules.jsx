import { MdOutlineHealthAndSafety } from "react-icons/md";

export default function HealthSafetyRules() {
  return (
    <div className="text-sm text-gray-700">
      <div className="uppercase py-3 font-bold">
        Venue Health & Safety Rules
      </div>
      <ul className="border-border-black text-xs grid grid-cols-2">
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Contactless Payment Available
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Disinfection between clients
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Barbicide COVID-19 Certified
        </li>
        <li className="inline-flex py-2">
          <MdOutlineHealthAndSafety
            size={20}
            className="text-primary-100 mr-1"
          />
          Employees wear disposable gloves
        </li>
      </ul>
    </div>
  );
}
