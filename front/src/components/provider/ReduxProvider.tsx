import { FC, ReactNode } from "react";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default ReduxProvider;
