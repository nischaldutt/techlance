import { Divider } from "antd";

const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-72 p-4 rounded-lg shadow-lg border-2">
      <div className="flex flex-col justify-center">
        <div className="flex gap-4 items-center text-primary-500">
          <div className="">{icon}</div>
          <h3 className="font-bold">{title}</h3>
        </div>
        <Divider className="my-2" />
        <p className="text-justify text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
