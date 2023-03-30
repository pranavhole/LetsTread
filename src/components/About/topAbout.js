// import { Container } from "postcss";
import React from "react";

export default function topAbout() {
  const Container = {
    width: "950px",
    height: "300px",
    margin: "0 auto",
    background:
      "linear-gradient(89.93deg, rgba(56, 142, 60, 0) -574.96%, rgba(105, 99, 168, 0.453133) -574.88%, rgba(128, 124, 182, 0.460452) -127.91%, rgba(255, 255, 255, 0.5) 250.37%)",
    borderRadius: "50px",
    filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
  };
  return (
    <>
      <div>
        <div className="relative inline-flex w-full justify-evenly ">
          <div className=" flex flex-col justify-center space-y-4">
            <div className="py-12">
              <div style={Container}>
                <div className="flex flex-col  justify-center items-center text-2xl text-[#216825] pt-6 font-bold">
                  WE ARE
                </div>
                <img alt="vv"
                  className="px-96 pb-0"
                  src="http://localhost:3000/Images/logo3d.png"
                />
                <div className="flex flex-col  justify-center items-center text-3xl text-[#1E2A55] font-bold">
                  LET’S TRADE INDIA
                </div>
                <p className="text-xl text-center text-[#216825] font-medium py-4">
                  Learn about Stock Market |
                  <span className="text-[#1E2A55]">Be Perfect</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
