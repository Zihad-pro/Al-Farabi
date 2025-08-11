import React from "react";

const Banner = () => {
  return (
    // container
    <div className=" border-3 border-white md:p-10   bg-linear-to-b from-[rgb(255,255,255,0.1)] via-[rgba(255,255,255,0.0649)] to-[rgba(255,255,255)] rounded-2xl ">
      {/* text */}
      <div className="space-y-5">
        <p className="md:text-6xl text-2xl text-center">
          Dependable Care, Backed by Trusted Professionals.
        </p>
        <p className="text-xl text-[#0F0F0F] text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <div className="flex justify-center my-10 ">
          <input
            type="text"
            placeholder="Search any doctor"
            className="border-1 rounded-full px-5 w-7/12 mr-3"
          />
          <button className="btn p-5 text-white rounded-4xl bg-[#176AE5] hover:bg-blue-400">
            Search Now
          </button>
        </div>
      </div>
      {/* image */}
      <div className="flex justify-center items-center gap-2">
        <div className="w-10/12 ">
          <img className="rounded-4xl" src="image/group.jpg" alt="" />
        </div>
        <div className="w-10/12">
          <img className="rounded-4xl h-10/12" src="image/muslim.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
