import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none flex items-center ${styles}`}
  >
    Book a Demo
    <GoArrowUpRight size={23} />
  </button>
);

export default Button;
