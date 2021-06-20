import React from "react";

type Props = {
  children: JSX.Element | null;
  condition: boolean;
};
const IfComponent: React.FC<Props> = ({ children, condition }): JSX.Element | null => {
  if (condition) return <React.Fragment>{children}</React.Fragment>;
  return null;
};

export default IfComponent;
