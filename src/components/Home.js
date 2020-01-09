import React from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
  const loca = useLocation();
  console.log("loca", loca);
  return <div>Hi Mazafaka</div>;
};
export default Home;
