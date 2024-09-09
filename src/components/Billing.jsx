import React from 'react';
import styles from "../style";
import layout from "../style";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import bill from "../assets/bill.png";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo + ' flex flex-wrap items-center'}>
      <div className="w-full sm:w-1/2 pr-4">
        <img src={bill} alt="billing" className="w-full max-w-xs sm:max-w-none mx-auto sm:mx-0" />
        {/* Adjust width as needed for the image. 'max-w-xs' limits width for smaller screens */}
      </div>
      <div className="w-full sm:w-1/2 pl-4">
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <div className="flex flex-row flex-wrap mt-6">
          <img src={apple} alt="apple" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
