import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import Button from "./Button";

const SectionWrapper = ({ reverse, title, description, showBtn, mockupImg, banner }) => {
  return (
    <div
      className={`min-h-screen ${styles.section}
       ${reverse ? styles.bgWhite : styles.bgPrimary}
        ${banner}`}
    >
      <div
        className={`flex items-center
       ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full`}
      >
        <div
          className={`${styles.descDiv} 
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`${styles.h1Text}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}
          ${reverse ? styles.blackText : styles.whiteText}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              Link=" https://expo.dev/@princek12/ProNef?serviceType=classic&
distribution=expo-go"
            />
          )}
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
