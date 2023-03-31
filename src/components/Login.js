import React from "react";

export default function Login() {
  const imageStyles = {
    backgroundImage: "url(http://localhost:3000/Images/bgimage2.png)",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const titleStyles = {
    height: "65px",
    left: "453px",
    top: "2710px",
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
      <div style={imageStyles}>
        <div className="relative inline-flex w-full justify-evenly ">
          <div className=" flex flex-col justify-center space-y-4">
            <div className="py-4">
              <div className=" flex flex-col justify-center items-center">
                <div style={titleStyles}>LET’S TRADE INDIA LOGIN</div>
              </div>

              {/* body */}
              <div className="flex justify-around">
                <div className="container flex pl-0 ml-0 pt-24">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/slide1.png"}
                    className="box2 rounded-2xl w-40"
                    alt=""
                  />
                </div>
                
              </div>
              {/* body */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
