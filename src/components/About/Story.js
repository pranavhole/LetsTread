import React from "react";

export default function Story() {
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
          <div style={titleStyles}>OUR STORY</div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="">
          <div className="py-3 pl-24 w-5/6">
            <p className="py-9">
              LTI is a Share market education platform. Since March 24, 2020,
              we've been assisting learners of all ages in learning the
              trendiest courses in any field with diversified bundles.
            </p>

            <p className="pb-9">
              LTI keeps culture and learning at the root of everything it does.
              We’re entrenched in creating a difference. Therefore, we strive to
              make a distinction in the way people approach entrepreneurship and
              education.
            </p>


            <p>
              We deliver courses and bundles designed, created, and produced
              with real-world statistical data input for the folks we highly
              believe in.
            </p>
          </div>
        </div>
        <div class="flex items-center px-3 pr-20">
          <img
            src={process.env.PUBLIC_URL + "/Images/story.png"}
            className="rounded-2xl w-5/6"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
