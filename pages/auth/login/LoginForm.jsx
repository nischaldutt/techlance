import Link from "next/link";
import { useRouter } from "next/router";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";

import { useAuthContext, useAntdMessageContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function LoginForm() {
  const router = useRouter();
  const [form] = Form.useForm();
  const { control, handleSubmit } = useReactHookForm();
  const { login, isLoading } = useAuthContext();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const onSubmit = (data) => {
    const { email, password } = data;

    const userObj = {
      user_type: APP_CONSTANTS.USER_TYPE.CUSTOMER,
      email,
      password,
    };

    return login(userObj, (isSuccess, message) => {
      return isSuccess
        ? (successMessage(message || APP_CONSTANTS.MESSAGES.LOGIN_SUCCESS),
          form.resetFields(),
          router.push(URL_CONSTANTS.HOME))
        : errorMessage(message || APP_CONSTANTS.MESSAGES.LOGIN_FAILED);
    });
  };

  return (
    <>
      <div className="px-8 sm:px-12 py-16 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
        <div className="text-3xl font-bold py-2 text-primary-100">
          Signin to your account
        </div>

        <Form
          name="login"
          form={form}
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
        >
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
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <div className="text-primary text-xs flex justify-end">
          Forgot your password?
        </div>

        <div className="w-full py-2 text-right">
          <Link href="/auth/signup">
            <a className="text-xs text-primary-100 font-bold">
              Don&apos;t have and account? Sign up
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
