import React from 'react';
import styles from "../style";
import layout from "../style";
import card from "../assets/card.png";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo + ' flex flex-wrap items-center'}>
      <div className="w-full sm:w-1/2 pr-4">
        <h2 className={styles.heading2}>
          Discover the best card deal <br className="sm:block hidden" /> in a few easy
          steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {/* Your paragraph content */}
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className="w-full sm:w-1/2 pl-4">
        <div className={layout.sectionImg}>
          <img src={card} alt="card deal" className="w-full max-w-xs sm:max-w-none mx-auto sm:mx-0" />
          {/* Adjust width as needed for the image. 'max-w-xs' limits width for smaller screens */}
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
