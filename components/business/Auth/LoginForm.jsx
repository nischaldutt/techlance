import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";

import { useAuthContext, useAntdMessageContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function LoginForm() {
  const router = useRouter();
  const [form] = Form.useForm();
  const { login, isLoading } = useAuthContext();
  const { successMessage, errorMessage } = useAntdMessageContext();

  const onSubmit = (data) => {
    const { email, password } = data;

    const userObj = {
      user_type: APP_CONSTANTS.USER_TYPE.BUSINESS,
      email,
      password,
    };

    return login(userObj, (isSuccess, message) => {
      return isSuccess
        ? (successMessage(message || APP_CONSTANTS.MESSAGES.AUTH.LOGIN_SUCCESS),
          form.resetFields(),
          router.push(URL_CONSTANTS.ROUTES.BUSINESS.ADMIN.DASHBOARD))
        : errorMessage(message || APP_CONSTANTS.MESSAGES.AUTH.LOGIN_FAILED);
    });
  };

  return (
    <>
      <div className="px-8 sm:px-12 py-16 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
        <div className="text-2xl font-bold py-2 text-primary-100">
          Signin to your Business Account
        </div>

        <Form name="login" form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input />
          </Form.Item>

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
            <Input.Password />
          </Form.Item>

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
          <Link href={URL_CONSTANTS.ROUTES.BUSINESS.AUTH.SIGN_UP}>
            <a className="text-xs text-primary-100 font-bold">
              Don&apos;t have an account? Sign up
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
