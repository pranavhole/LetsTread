import React from "react";

export default function Login() {
  const imageStyles = {
    backgroundImage: "url(http://localhost:3000/Images/bgimage.png)",
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
                <div className="container flex px-10 pl-24">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/login.png"}
                    className="box2 rounded-2xl w-5/6"
                    alt=""
                  />
                </div>

                {/* login card */}
                <div className="loginbox w-[45rem]">
                  <div className="field">
                    <form className="flex flex-col">
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="text-black-800 w-2/3 p-2 focus:border-[#1E2A55] rounded"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="text-black-800 w-2/3 p-2 focus:border-[#1E2A55] rounded"
                      />
                      <button className="p-2 w-1/3 bg-[#2F8433] text-white hover:bg-[#1E2A55] rounded">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
                {/* login card */}
              </div>
              {/* body */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
