import React from "react";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

const Footer = (): JSX.Element => {
  return (
    <div>
      <div>
        <div>
          <a href="/">
            <img src="/logo.png" alt="Logo" width={140} height={65} />
          </a>
          <p>
            A Better Weigh Medical Weight Loss Center offers a weight loss
            program dedicated to helping you achieve long term weight loss
            success with the use of FDA approved medication.
          </p>
          <div>
            <IoLocationSharp />
            <div>
              <p>Head Office:</p>
              <p>1931 W 95th Street Chicago IL, 60643</p>
            </div>
          </div>
          <div>
            <FaPhoneAlt />
            <div>
              <p>Phone:</p>
              <p>773-496-4222</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h5>About</h5>
            <ul>
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
          <div>
            <h5>More Links</h5>
            <ul>
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
      <div>
        <div>
          <a href="/callback-ig">
            <AiFillInstagram />
          </a>
          <a href="/callback-tw">
            <BsTwitter />
          </a>
          <a href="/callback-fb">
            <FaFacebookF />
          </a>
        </div>
        <p>Copyright by A Better Weigh Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
