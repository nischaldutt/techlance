import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";

import axiosClient from "@/utils/axiosClient";

const { Option } = Select;

export default function SignUpForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [form] = Form.useForm();

  // console.log(watch("firstName"));

  const onSubmit = (data) => {
    delete data.confirm;

    const userObj = {
      user_type: "customer",
      first_name: "Vikas",
      last_name: "Arora",
      email: "aroravikas583@gmail.com",
      mobile_no: 9779866222,
      password: "Vikas123?",
      country_id: 1,
      is_mobile_verified: 1,
      is_email_verified: 1,
    };

    return axiosClient.post("/auth/signup", userObj);
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: onSubmit,
    onSuccess: (data, variables, context) => {
      // make use of getstaticprops
      console.log({ type: "onSuccess", data, variables, context });
      // reset the form using reset function react query
    },
    onError: (error, variables, context) => {
      console.log({ type: "onError", error, variables, context });
    },
    onSettled: (data, error, variables, context) => {
      console.log({ type: "onSettled", data, error, variables, context });
    },
  });

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select className="w-[70px]">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="p-8 sm:px-12 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
      <div className="text-3xl font-bold pb-8 text-primary-100">
        Sign up to your account
      </div>

      <Form
        name="register"
        form={form}
        layout="vertical"
        onFinish={handleSubmit(mutate)}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Invalid email" },
              ]}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="mobile"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="mobile"
              label="Mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                /** todo: enable mobile regex based in country */
                // {
                //   pattern: /^\+1\d{3}\s?\d{3}\s?\d{4}$/i,
                //   message: "Invalid mobile number",
                // },
              ]}
            >
              <Input {...field} addonBefore={prefixSelector} />
            </Form.Item>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long",
                },
              ]}
              hasFeedback
            >
              <Input.Password {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="confirm"
          control={control}
          render={({ field }) => (
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password {...field} />
            </Form.Item>
          )}
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            name="submit"
            loading={isLoading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
