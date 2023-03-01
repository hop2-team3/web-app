import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const getAccess = () => {
    alert(access ? "access denied" : "access accepted");
    setAccess(!access);
  };
  return (
    <div className="flex fixed w-screen h-[60px] justify-between pt-5 pr-[150px] ml-[100px]">
      <div className="flex">
        <Link
          to="/"
          // onClick={pathname === "/"}
          className={`font-Mulish font-bold text-3xl ${
            pathname === "/" ? "text-[white]" : "text-black"
          }`}
        >
          team.
        </Link>
        <div className="box-border h-[5px] w-[5px] border-sky-800 bg-sky-800 mt-[23px]"></div>
      </div>
      <div className="w-[500px] flex flex-row justify-between">
        <Link
          to="/Products"
          // onClick={pathname === "/Products"}
          className={`font-Mulish font-bold text-xl decoration-solid decoration-gray-300 ${
            pathname === "/" ? "text-[white]" : "text-black"
          } `}
        >
          Products
        </Link>
        <Link
          to="/Services"
          // onClick={pathname === "/Services"}
          className={`font-Mulish font-bold text-xl decoration-solid decoration-gray-300 ${
            pathname === "/" ? "text-[white]" : "text-black"
          }`}
        >
         Services
        </Link>
        <Link
          to="/Contact"
          // onClick={pathname === "/Contact"}
          className={`font-Mulish font-bold text-xl decoration-solid decoration-gray-300 ${
            pathname === "/" ? "text-[white]" : "text-black"
          }`}
        >
          Contact
        </Link>
        <Link
          to="/LogIn"
          // onClick={pathname === "/LogIn"}
          className={`font-Mulish font-bold text-xl decoration-solid decoration-gray-300 ${
            pathname === "/" ? "text-[white]" : "text-black"
          }`}
        >
          Log in
        </Link>
        <div className="box-border h-[40px] w-[130px] border-2 flex items-center justify-center mt-[-5px]">
          <button
            to="/Blog"
            onClick={getAccess}
            className="font-Mulish font-bold text-xl  decoration-solid decoration-gray-300 text-gray-700"
          >
            {access ? (
              <p className="text-gray-700">Cancel access</p>
            ) : (
              <p className="text-gray-700">Get access</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;