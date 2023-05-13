import Link from "next/link";
import { useRouter } from "next/router";
import { useForm as useReactHookForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";

import { useAuth } from "@/contexts/AuthContext";
import axiosClient from "@/utils/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function LoginForm() {
  const router = useRouter();
  const { isAuthenticated, user, login, loading, logout } = useAuth();

  const [form] = Form.useForm();

  // todo: create messageApi context to use throughout the app
  // then there is no need to include contextHolder in each page
  const [messageApi, contextHolder] = message.useMessage();
  const { control, handleSubmit } = useReactHookForm();

  const loginSuccessMessage = (successMsg) => {
    messageApi.open({
      type: "success",
      content: successMsg || "Logging you in!",
    });
  };

  const loginErrorMessage = (errorMsg) => {
    messageApi.open({
      type: "error",
      content: errorMsg || "Login Failed!",
    });
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    const userObj = {
      user_type: APP_CONSTANTS.USER_TYPE.CUSTOMER,
      email: email,
      password: password,
    };

    return login(userObj);
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: onSubmit,
    onSuccess: (data, variables, context) => {
      // console.log({ type: "onSuccess", data, variables, context });
      loginSuccessMessage(data?.data?.message);
      form.resetFields();
      router.push(URL_CONSTANTS.HOME);
    },
    onError: (error, variables, context) => {
      // console.log({ type: "onError", error, variables, context });
      loginErrorMessage(error?.response?.data?.message);
    },
    onSettled: (data, error, variables, context) => {
      // console.log({ type: "onSettled", data, error, variables, context });
    },
  });

  return (
    <>
      {contextHolder}

      <div className="px-8 sm:px-12 py-16 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
        <div className="text-3xl font-bold py-2 text-primary-100">
          Signin to your account
        </div>

        <Form
          name="login"
          form={form}
          layout="vertical"
          onFinish={handleSubmit(mutate)}
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
