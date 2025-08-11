import React, { useEffect, useState } from "react";

import { getdoctors, removeDoctors } from "../utils";
import Nodoctor from "../Nodoctor";
import Recharts from "../Components/recharts";

const Booking = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const savedDoctor = getdoctors();
    setDisplay(savedDoctor);
  }, []);

  const handleDelete = (id) => {
    removeDoctors(id);
    setDisplay(getdoctors);
  };
  if (display.length < 1) return <Nodoctor />;
  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-center py-10">
        <Recharts data={display}></Recharts>
      </div>
      <div className="py-5">
        <p className="md:text-4xl tex-2xl font-bold text-center">
          My Today Appointments
        </p>
        <p className="text-xl text-center pt-3">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      {display.map((singleDoctor, index) => (
        <div key={index} className="max-w-5xl mx-auto py-5">
          <div className="bg-base-100 shadow-sm py-3 card rounded-2xl px-5">
            <p className="text-xl font-bold ">{singleDoctor.name}</p>

            <div className="py-5">
              <div className="flex justify-between  md:text-xl pt-2 border-b-1 pb-3 border-gray-300">
                <p className="text-gray-700">
                  {singleDoctor.education} - {singleDoctor.speciality}
                </p>
                <p className=" t px-2">
                  Appointment Fee : {singleDoctor.fee} Taka + Vat
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(singleDoctor.id)}
              className="text-red-600 border-1 text-xl bg-white rounded-4xl py-1 cursor-pointer hover:bg-red-300 w-full"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
