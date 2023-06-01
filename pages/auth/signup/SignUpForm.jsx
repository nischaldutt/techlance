import { useRouter } from "next/router";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input, Select } from "antd";

import { useSignup } from "@/hooks";
import { useAntdMessageContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

const { Option } = Select;

export default function SignUpForm() {
  const router = useRouter();
  const [form] = Form.useForm();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useReactHookForm();
  const { messageApi } = useAntdMessageContext();

  const signupSuccessMessage = (successMsg) => {
    messageApi.open({
      type: "success",
      content: successMsg || APP_CONSTANTS.MESSAGES.SIGNUP_SUCCESS,
    });
  };

  const signupErrorMessage = (errorMsg) => {
    messageApi.open({
      type: "error",
      content: errorMsg || APP_CONSTANTS.MESSAGES.ERROR,
    });
  };

  const { mutate: signup, isLoading } = useSignup((isSuccess, message) => {
    return isSuccess
      ? (signupSuccessMessage(message),
        form.resetFields(),
        router.push(URL_CONSTANTS.HOME))
      : signupErrorMessage(message);
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
    <>
      <div className="p-8 sm:px-12 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
        <div className="text-3xl font-bold pb-8 text-primary-100">
          Sign up to your account
        </div>

        <Form
          name="signup"
          form={form}
          layout="vertical"
          onFinish={handleSubmit(signup)}
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
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                  // todo: enable mobile regex based on country
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
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
