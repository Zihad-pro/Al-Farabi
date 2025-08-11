import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { CiCircleInfo } from "react-icons/ci";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { addDoctorApartment } from "../utils";
const VewDetailes = () => {
  const data = useLoaderData();
 
  const { id } = useParams();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  const {
    image,
    name,
    availableDays,
    fee,
    registrationNumber,
    education,
    description,
    speciality,
    work,
  } = singleDoctor || {};

  const hadleDoctor = () => {
    addDoctorApartment(singleDoctor);
  };

  return (
    <div className="pt-6 container mx-auto rounded-2xl">
      <div className="card bg-base-100 mx-auto max-w-5xl shadow-sm">
        <div className="card-body text-center">
          <p className="md:text-4xl text-xl font-bold">
            Doctor’s Profile Details
          </p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      {/*card  */}
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-7">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white  shadow-sm lg:flex-row sm:mx-auto p-5 rounded-3xl">
          <div className="relative lg:w-1/2 ">
            <img
              src={image}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2 space-y-2">
            <h5 className="mb-3 text-3xl font-bold leading-none sm:text-4xl">
              {name}
            </h5>
            <p className=" text-gray-500 text-xl">
              {education}
              <br /> {speciality}
            </p>
            <p className="border-b-1 pb-2 border-dashed">
              <span className=" text-gray-500 text-xl"> Working at</span> <br />
              <span className="md:text-2xl text-xl font-semibold"> {work}</span>
            </p>
            <div className="flex items-center  gap-2 border-b-1 border-dashed pb-2 ">
              {" "}
              <PiTrademarkRegisteredLight size={20} />
              <div className="text-gray-600">
                <span className="font-semibold text-lg"> Reg No :</span>{" "}
                {registrationNumber}
              </div>
            </div>

            <div className="flex md:gap-1 items-center">
              <p className="text-xl font-semibold"> Availability:</p>
              {availableDays.map((avalible, index) => (
                <p
                  key={index}
                  className="badge rounded-2xl bg-amber-50 text-[#FFA000]"
                >
                  {avalible}
                </p>
              ))}
            </div>
            <p>
              <span className="text-xl font-semibold">Consultation Fee :</span>{" "}
              <span className="text-[#176AE5]">Taka : {fee}</span>{" "}
              <span className="text-gray-500">
                (include Vat) Per consultation
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Book an Appointment */}
      <div className="max-w-5xl mx-auto py-5">
        <div className="bg-base-100 shadow-sm py-3 card rounded-2xl px-5">
          <p className="md:text-4xl text-xl border-b-1 border-dashed text-center py-5">
            Book an Appointment
          </p>

          <div className="flex justify-between  md:text-xl pt-2 border-b-1 pb-3 border-gray-300">
            <p className="font-semibold">Availability</p>
            <p className=" text-[#09982F] bg-green-100 rounded-3xl px-2">
              Doctor Available Today
            </p>
          </div>
          <div className="py-2">
            <div className="text-[#FFA000] bg-orange-50 rounded-2xl flex">
              <div className="px-1 mt-1">
                <CiCircleInfo size={22} />{" "}
              </div>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </div>
          </div>
          <button
            onClick={hadleDoctor}
            className="text-white text-xl bg-[#176AE5] rounded-4xl py-1 cursor-pointer hover:bg-blue-500 w-full"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VewDetailes;
