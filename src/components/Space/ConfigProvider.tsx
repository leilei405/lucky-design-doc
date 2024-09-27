import React, { PropsWithChildren } from "react";
import { ConfigContext, ConfigContextType } from "./types";

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType> {}

export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props;

  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  );
}
