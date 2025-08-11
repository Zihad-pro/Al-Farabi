import React from "react";
import { FaHeartBroken } from "react-icons/fa";

const Nodoctor = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <FaHeartBroken className="text-red-400 text-6xl mb-4 animate-pulse" />
      <h2 className="text-2xl font-bold text-gray-700">
        You haven't added doctor yet
      </h2>
      <p className="text-gray-500 mt-2">Please add any doctor Appointments. Thank you . </p>
    </div>
  );
};

export default Nodoctor;
