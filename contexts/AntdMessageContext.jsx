import { createContext, useContext } from "react";
import { message } from "antd";

const AntdMessageContext = createContext(null);

export function AntdMessageProvider({ children }) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <AntdMessageContext.Provider value={{ messageApi }}>
      {contextHolder}
      {children}
    </AntdMessageContext.Provider>
  );
}

export default function useAntdMessageContext() {
  return useContext(AntdMessageContext);
}
