import { PropsWithChildren } from "react";

type DivProps = {
  className?: string;
};

const Division: React.FC<PropsWithChildren<DivProps>> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export default Division;
