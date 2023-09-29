import { Tag, Switch, Spin, Empty } from "antd";

const ServiceList = ({ services, isFetching }) => {
  return (
    <section className="relative flex flex-col min-w-0 break-words w-full h-[60vh] mb-6 shadow-lg rounded-lg bg-white border-0 pt-6 py-3">
      <h2 className="mx-6 uppercase underline-offset-8 font-bold">Services</h2>

      <Spin spinning={isFetching}>
        <div className="mt-8 h-[50vh] overflow-y-auto">
          {!services?.length ? (
            <Empty description="No services in your business yet!" />
          ) : (
            services?.map((service, index) => (
              <div
                className="grid grid-cols-[3fr_1fr] mx-6 border-b-2"
                key={service?.serviceId}
              >
                <div className="py-2">
                  <h3 className="font-bold text-sm pb-1">
                    {service?.serviceName}
                  </h3>
                  <p className="text-xs w-2/3 pb-2">
                    Ant Design, a design language for background applications,
                    is refined by Ant UED Team
                  </p>
                  <span className="">
                    <Tag>{service?.categoryName}</Tag>
                    <Tag>{service?.subCategoryName}</Tag>
                  </span>
                </div>
                <div className="flex flex-col items-end justify-evenly text-xs font-bold py-2">
                  <div className="flex gap-8">
                    <div className="text-primary-100 cursor-pointer">Edit</div>
                    <div className="text-red-500 cursor-pointer">Remove</div>
                  </div>

                  <div className="text-base text-gray-500">
                    $ {service?.servicePrice} per hr
                  </div>

                  <div className="flex gap-2">
                    <p className="text-gray-700">Status</p>

                    <Switch size="small" defaultChecked />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Spin>
    </section>
  );
};

export default ServiceList;
