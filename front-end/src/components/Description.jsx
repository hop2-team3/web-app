import React from "react";
import { Link } from "react-router-dom";

export const Description = ({ title, about }) => {
  return (
    <div className="w-[465px] h-[363px] flex flex-col justify-between">
      <p>{title}</p>
      <p>{about}</p>
      <p>Learn more</p>
      {/* <Link>Learn more</Link> */}
    </div>
  );
};
