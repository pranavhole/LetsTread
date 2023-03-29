import React from "react";

export default function steps() {
  return (
    <>
    {/* step1 */}
      <div className="flex justify-around">
        <div className="py-40 pl-50">
          <div className="py-3 w-96">
            <h1 className="text-3xl text-center text-black font-bold">
              Make a<span className="text-teal-900"> Decision</span>
            </h1>
            <p className="py-5 text-center not-italic font-medium text-2xl">
              It’s time to become financially independent steps to start your
              journey with LTI
            </p>
          </div>
        </div>
        <div class="flex items-center px-10 pl-24">
          <img
            src={process.env.PUBLIC_URL + "/Images/step-1.png"}
            className="rounded-2xl w-60"
            alt=""
          />
        </div>
      </div>

{/* step 2 */}
      <div className="flex justify-around">
        <div class="flex items-center px-10 pl-24">
          <img
            src={process.env.PUBLIC_URL + "/Images/step-2.png"}
            className="rounded-2xl w-60"
            alt=""
          />
        </div>
        <div className="py-25 pl-50">
          <div className="py-3 w-96">
            <h1 className="text-3xl text-center text-black font-bold">
              <span className="text-teal-900"> Subscribe </span> to our Stock
              Trading Courses
            </h1>
            <p className="py-5 text-center not-italic font-medium text-2xl">
             Get in depth knowledge of stock market by subscribing our Trading in the zone and LTI Options Courses.
            </p>
          </div>
        </div>
      </div>

      {/* step 3 */}

      <div className="flex justify-around">
        <div className="py-40 pl-50">
          <div className="py-3 w-96">
            <h1 className="text-3xl text-center text-black font-bold">
            Scheduling<span className="text-teal-900"> Process</span>
            </h1>
            <p className="py-5 text-center not-italic font-medium text-2xl">
            Join our live classes through zoom link, also you can go through recordings. Also we provide you the Mentor support.
            </p>
          </div>
        </div>
        <div class="flex items-center px-10 pl-24">
          <img
            src={process.env.PUBLIC_URL + "/Images/step-3.png"}
            className="rounded-2xl w-60"
            alt=""
          />
        </div>
      </div>

      {/* step 4 */}

      <div className="flex justify-around">
        <div class="flex items-center px-10 pl-24">
          <img
            src={process.env.PUBLIC_URL + "/Images/step-4.png"}
            className="rounded-2xl w-60"
            alt=""
          />
        </div>
        <div className="py-25 pl-50">
          <div className="py-3 w-96">
            <h1 className="text-3xl text-center text-black font-bold"> Transformation
              <span className="text-teal-900">  Completed </span> 
            </h1>
            <p className="py-5 text-center not-italic font-medium text-2xl">
            Novice to Professional Trader Journey start from here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}