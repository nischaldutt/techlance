import { createContext, useContext } from "react";
import { message } from "antd";

const AntdMessageContext = createContext(null);

export function AntdMessageProvider({ children }) {
  const [messageApi, contextHolder] = message.useMessage();

  function successMessage(successMsg) {
    return messageApi.open({
      type: "success",
      content: successMsg,
    });
  }

  function errorMessage(errorMsg) {
    return messageApi.open({
      type: "error",
      content: errorMsg,
    });
  }

  return (
    <AntdMessageContext.Provider
      value={{ messageApi, successMessage, errorMessage }}
    >
      {contextHolder}
      {children}
    </AntdMessageContext.Provider>
  );
}

export function useAntdMessageContext() {
  return useContext(AntdMessageContext);
}
