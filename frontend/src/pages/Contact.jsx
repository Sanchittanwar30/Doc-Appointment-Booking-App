import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semobold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semobold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            100 baker street <br /> milton road , Raftel , OP
          </p>
          <p className="text-gray-500">
            Tel : +91 99999-xxxxx <br /> sanchez.xxx@gmail.com
          </p>
          <p className="text-gray-500">Careers at Prescripto</p>
          <p className="text-gray-500">Learn more about Us</p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            {" "}
            Explore{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
