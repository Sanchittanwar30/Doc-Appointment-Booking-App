import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 tezt-sm text-gray-600 ">
          <p>
            Welcome to Prescripto , Your Trusted Partner in managing yout
            healthcare needs conveniently and effeciently. At Prescripto we
            understand the challenge individuals face when it comes to
            scheduling doctor appointments and managing their health records
          </p>
          <p>
            Prescripto is commited to excellence in healthcare technology. We
            continously strive to enhance our platform, Integrating the latest
            advancement to improve user experience and deliver best service.
            Whether you're booking your first appointment or managing ongoing
            care , We are here to support you every step on the way{" "}
          </p>
          <b className="text-gray-800">Our Vision </b>
          <p>
            Our Vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healtcare providers , making it easier for You to access the
            care You need , when You need it{" "}
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appoitnment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored Recommendations and reminders to help you stay on top of
            your health
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
