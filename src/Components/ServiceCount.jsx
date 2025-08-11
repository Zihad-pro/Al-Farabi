import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServiceCount = () => {
  const [ref1, setView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, setView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, setView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, setView4] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="pt-15">
      <p className="text-center font-semibold text-5xl">
        We Provide Best Medical Services
      </p>
      <p className="text-center pt-5 text-gray-600">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Doctors */}
          <div
            ref={ref1}
            className="text-center py-10 px-2 rounded-xl bg-base-100 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <img src="image/success-doctor.png" alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {setView1 && <CountUp start={0} end={199} duration={6} />}+
            </h6>
            <p className="font-bold text-xl pt-2 text-gray-600">
              Total Doctors
            </p>
          </div>

          {/* Total Reviews */}
          <div
            ref={ref2}
            className="text-center py-10 px-2 rounded-xl bg-base-100 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src="image/success-review.png" alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {setView2 && <CountUp start={0} end={450} duration={5} />}+
            </h6>
            <p className="font-bold text-xl pt-2 text-gray-600">
              Total Reviews
            </p>
          </div>

          {/* Total Patients */}
          <div
            ref={ref3}
            className="text-center py-10 px-2 rounded-xl bg-base-100 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src="image/success-patients.png" alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {setView3 && <CountUp start={500} end={2000} duration={4} />}+
            </h6>
            <p className="font-bold text-xl pt-2 text-gray-600">Patients</p>
          </div>

          {/* Total Staffs */}
          <div
            ref={ref4}
            className="text-center py-10 px-2 rounded-xl bg-base-100 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-12">
              <img src="image/success-staffs.png" alt="" />
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              {setView4 && <CountUp start={0} end={200} duration={6} />}+
            </h6>
            <p className="font-bold text-xl pt-2 text-gray-600">Total Staffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCount;
