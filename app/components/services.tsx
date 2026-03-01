import Image from "next/image";
import Link from "next/link";
import ServiceTypes from "./services/servicetypes";
import WhyChooseUs from "./services/whychooseus";
import WebDesginServices from "./services/wdservice";
import SoftwareDevelopmentServices from "./services/sdservice";
import WhatMakes from "./services/whatmakes";
import OurDevelopmentProcess from "./services/devprocess";
import WeServe from "./services/weserve";
export default function Services() {
  return (
    <div className="w-full py-5" id="certificates">
      
      <ServiceTypes />
      <WhyChooseUs />
      <WebDesginServices />
      <SoftwareDevelopmentServices/>
      <WeServe/>
      <WhatMakes/>
      <OurDevelopmentProcess/>
    </div>
  );
}
