import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Divider, Select, Tag } from "antd";

let timeout;
let currentValue;

const fetchData = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  currentValue = value;
  const fake = () => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then((res) => {
        console.log({ res });
        if (currentValue === value) {
          const { products } = res;

          const data = products.map((product) => ({
            value: product.id,
            label: product.title,
          }));

          callback(data);
        }
      });
  };

  timeout = setTimeout(fake, 300);
};

export default function SearchSelect() {
  const router = useRouter();

  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState();

  React.useEffect(() => {
    if (value) {
      router.push(`/service_booking/12`);
    }
  }, [value, router]);

  const handleSearch = (newValue) => {
    if (newValue) {
      fetchData(newValue, setData);
    } else {
      setData([]);
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Select
      className="w-full"
      size="large"
      showSearch={true}
      loading={true}
      value={value}
      placeholder="Eg. Appliance Install"
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      dropdownRender={(menu) => (
        <div className="p-2 text-gray-700 ">
          <div className="h-full flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
              <MenuTitle title="Businesses" />
              {menu}
            </div>
            <div className="border-r border-gray-200 mx-2"></div>
            <div className="w-full sm:w-1/2">
              <MenuTitle title="Services" />
              {menu}
            </div>
          </div>

          <Divider className="m-0" />

          <div className="w-full p-2">
            <MenuTitle title="Categories" />
            {data?.map((category) => {
              return (
                <Link key={category.value} href="/service_booking/12">
                  <Tag className="my-1 rounded-full font-bold border-primary-500 cursor-pointer">
                    {category.label}
                  </Tag>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      options={(data || []).map(({ value, label }) => ({
        value,
        label,
      }))}
    />
  );
}

function MenuTitle({ title }) {
  return (
    <p className="font-bold text-sm py-2 text-primary-500">
      {title.toUpperCase()}
    </p>
  );
}
