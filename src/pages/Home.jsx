import React from "react";
import Banner from "../Components/Banner";
import Doctors from "../Components/Doctors";
import { useLoaderData } from "react-router";
import ServiceCount from "../Components/ServiceCount";

const Home = () => {
  const data=useLoaderData();

  return (
    <div className="container mx-auto py-20 ">
      <Banner></Banner>
      <Doctors data={data}></Doctors>
      <ServiceCount></ServiceCount>
    </div>
  );
};

export default Home;
