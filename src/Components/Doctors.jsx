import React, { Suspense, useEffect, useState } from "react";
import Doctor from "./Doctor";


const Doctors = ({ data }) => {
  const [display,setDisplay]=useState([]);
  const [showall,setShowAll]=useState(false)
useEffect(()=>{
if(showall){
  setDisplay(data)
}
else{
  setDisplay(data.slice(0, 6));
}
},[data,showall])

// remove data


  return (
    <div>
      <h1 className="md:text-5xl text-2xl text-center font-bold pt-5">
        Our Best Doctors
      </h1>
      <p className="text-2xl text-center text-gray-500 py-5">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense fallback={<span>loading ....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {display.map((singleDoctor) => (
            <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>
          ))}
        </div>
      </Suspense>
      <div className="text-center mt-8">
        {" "}
        <button 
        onClick={()=>setShowAll(!showall)}
      
        className="hover:bg-blue-400 btn bg-[#176AE5] text-white rounded-4xl p-5">
         {showall?"Show less":"Veiw all Doctors"}
        </button>
      </div>
    </div>
  );
};

export default Doctors;
