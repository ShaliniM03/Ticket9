import React, { FC } from "react";

export interface SaleOffBadgeProps {
  message?: string;
  children?: React.ReactNode;
}

const ToolTip: FC<SaleOffBadgeProps> = ({ message, children }) => {
  return (
    // <div className="group relative flex p-10">
    //   {children}
    //   <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
    //     {message}
    //   </span>
    // </div>
    <div className="group relative w-max">
      {children}
      <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
