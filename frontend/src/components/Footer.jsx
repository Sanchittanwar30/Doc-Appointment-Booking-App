import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*----ls----*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to Prescripto, your trusted healthcare companion. Easily
            book doctor appointments, manage schedules, and access medical
            records in one place. Our user-friendly app connects you with
            certified professionals, ensuring timely care. Stay healthy with
            Prescripto, where your health and convenience come first. Download
            now and start your wellness journey!
          </p>
        </div>
        {/*----cs----*/}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*----rs----*/}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-99999xxxxx</li>
            <li>sanchit.tanwer@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/*---cr txt-----*/}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
