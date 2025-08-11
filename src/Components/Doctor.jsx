import React from "react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { Link } from "react-router";
const Doctor = ({ singleDoctor }) => {
 
  const { image, name, experience, registrationNumber, education,id } =
    singleDoctor;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-5">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <div className="flex justify-between gap-5">
          <p className=" badge badge-outline bg-green-50 text-[#09982F]">
            Avaliable
          </p>
          <p className=" badge badge-outline text-[#176AE5] bg-blue-50">
            {experience}+ experience
          </p>
        </div>
        <div className="border-b-1 border-dashed py-2">
          <p className="md:text-2xl text-xl font-bold">{name}</p>
          <p className="md:text-lg text-gray-600">{education}</p>
        </div>

        <div className="flex items-center  gap-2">
          {" "}
          <PiTrademarkRegisteredLight size={20} />
          <div className="text-gray-600">
            <span className="font-semibold text-lg"> Reg No :</span>{" "}
            {registrationNumber}
          </div>
        </div>

        <Link to={`/veiwDetalils/${id}`}>
          {" "}
          <button className="btn w-full rounded-xl text-[#176AE5] bg-white">
            Veiw Detalis
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
