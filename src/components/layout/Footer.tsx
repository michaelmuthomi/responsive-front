import React from "react";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

const Footer = (): JSX.Element => {
  return (
    <div className="relative flex flex-col text-base sm:text-lg px-8 sm:px-16 xl:px-40 pt-8 xl:pt-16 pb-8 h-full bg-customWhite">
      <div className="flex flex-wrap xl:mt-4 mb-4 xl:mb-24 justify-between">
        <div className="space-y-8 pb-8 w-full sm:w-1/2 xl:w-5/12">
          <a href="/">
            <img src="/logo.png" alt="Logo" width={140} height={65} />
          </a>
          <p>
            A Better Weigh Medical Weight Loss Center offers a weight loss
            program dedicated to helping you achieve long term weight loss
            success with the use of FDA approved medication.
          </p>
          <div className="flex">
            <IoLocationSharp className="contactIcon" />
            <div className="xl:flex xl:flex-wrap">
              <p className="font-bold xl:min-w-fit xl:mr-1">Head Office:</p>
              <p className="xl:min-w-fit">
                1931 W 95th Street Chicago IL, 60643
              </p>
            </div>
          </div>
          <div className="flex">
            <FaPhoneAlt className="contactIcon" />
            <div className="xl:flex xl:space-x-1">
              <p className="font-bold">Phone:</p>
              <p>773-496-4222</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap xl:space-x-16">
          <div className="py-4 xl:px-4 mr-8">
            <h5 className="text-3xl mb-4 xl:mb-8">About</h5>
            <ul className="space-y-4">
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/bookings">Book Online</a>
              </li>
              <li>
                <a href="/locations">Locations</a>
              </li>
              <li>
                <a href="/stories">Real Patient Stories</a>
              </li>
              <li>
                <a href="/weight-loss">Weight Loss Programs</a>
              </li>
            </ul>
          </div>
          <div className="py-4 xl:px-4">
            <h5 className="text-3xl mb-4 xl:mb-8">More Links</h5>
            <ul className="space-y-4">
              <li>
                <a href="/franchise-opportunities">Franchise Opportunities</a>
              </li>
              <li>
                <a href="/career-opportunities">Career Opportunities</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/return-policy">Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between xl:space-y-0">
        <div className="flex space-x-6 mr-4">
          <a href="/callback-ig" className="footerIcon">
            <AiFillInstagram className="socialMediaIcon" />
          </a>
          <a href="/callback-tw" className="footerIcon">
            <BsTwitter className="socialMediaIcon" />
          </a>
          <a href="/callback-fb" className="footerIcon">
            <FaFacebookF className="socialMediaIcon" />
          </a>
        </div>
        <p className="py-4">
          Copyright by A Better Weigh Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
