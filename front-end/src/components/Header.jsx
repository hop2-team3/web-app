import React from "react";

export const Header = () => {
  return (
    <>
      <div className=" fixed flex flex-row z-auto items-center justify between py-5 px-10 top-0 w-full h-[110px] border-black rounded-full ">
        <div className=" text-black ml-[30px] h-fit text-mt font-extral">
          team
          <div className="inline-block text-[#0BBEF2]">,,,</div>
        </div>

        <div className="flex ml-[790px] flex-row items-center gap-8 ">
          <a href="/components/Products">Products</a>
          <button className="">Services</button>
          <button className="">Contact</button>
          <button className="">Log in</button>
          <button className="h-full px-5 py-2 border-[4px] opacity-70 rounded w-fit">
            Get access
          </button>
        </div>
      </div>

      {/* <Switch>
        <Route path='/components/Products' exact component={Products}></Route>
    </Switch> */}

      {/* </Router> <Router> */}
    </>
  );
};
