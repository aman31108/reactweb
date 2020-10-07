
import React from "react";
 import web from "../src/images/img1.svg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
return (
  <>
    <Commom
      name="Grow your business with"
       imgsrc={web}
      visit="/services"
      btname="Get Started"
    />
  </>
);
};
export default Home;


//
// function Home() {
//   return (
//     <div >
//     <h1>freins</h1>
//     </div>
//   );
// }
