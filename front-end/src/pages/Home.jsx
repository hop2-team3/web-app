import React from "react";
import bImage from "../assets/background.png";
import { Description } from "../components/Description";

export const Home = () => {
  const styles = {
    container: {
      backgroundImage: `url(${bImage})`,
      backgroundSize: "cover",
    },
  };
  return (
    <>
      <div
        className="w-screen h-screen border-pink-900"
        style={styles.container}
      >
        <div className="w-[514px] h-[326px] top-[252px]  left-[200px] relative flex flex-col justify-between scale-[1.3]">
          <div>
            <p className="font-['Work_Sans'] font-normal text-[48px] leading-[56px] text-[#FFF]">
              Instant <br />
              collaborations for <br />
              remote teams
            </p>
            <p className="font-['Mulish'] text-[18px] text-[#fff] font-bold">
              All in one for your remote team chats, <br />
              collaboration and track projects
            </p>
          </div>
          <div>
            <input
              type="text"
              className="w-[316px] h-[56px] rounded-[5px] outline-0 pl-[15px] placeholder:text-[#6D7D8B] placeholder:font-normal placeholder:text-[16px]"
              placeholder="Email"
            />
            <button className="w-[163px] h-[56px] bg-[#0BBEF2] rounded-[5px] ml-[13.8px] text-[#fff]">
              Get early access
            </button>
          </div>
        </div>
      </div>
      <Description title="Your Hub for teamwork" about />
    </>
  );
};
