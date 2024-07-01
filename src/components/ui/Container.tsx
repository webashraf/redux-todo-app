import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className=" w-full max-w-7xl mx-auto border-2 p-14">
      {children}
    </div>
  );
};

export default Container;
