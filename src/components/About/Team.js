import React from "react";

export default function Team() {
  const titleStyles = {
    height: "65px",
    left: "453px",
    top: "1000px",
    borderRadius: "nullpx",
    fontFamily: "Mulish",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "65px",
    letterSpacing: "0em",
    color: "rgba(45, 85, 47, 1)",
  };
  return (
    <>
      <div className="relative inline-flex w-full justify-evenly ">
        <div className=" flex flex-col justify-center items-center">
          <div className="py-12">
            <div style={titleStyles}>OUR TEAM</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col  justify-center items-center">
          <img alt="abc"
            className="px-96 pb-0"
            src="http://localhost:3000/Images/profilePic.png"
          />
          <div className="justify-center items-center text-xl text-[#2F2F2F] font-medium">
            Amitabh Bacchan
          </div>
          <p className="text-center text-[#2F2F2F] font-medium ">Founder</p>
        </div>
      </div>
    </>
  );
}
