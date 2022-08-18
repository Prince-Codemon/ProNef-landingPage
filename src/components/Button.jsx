import React from 'react'
import styles from '../styles/Global'


const Button = ({assetUrl, Link}) => {
  return (
    <div
      className={`${styles.btnBlack} `}
      onClick={() => window.open(Link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className='flex flex-col justify-start ml-4'>
        <p
          classname={`${styles.btnText} font-bold text-sm`}
          style={{ color: "white" }}
        >
          View it on
        </p>
        <p
          classname={`${styles.btnText} font-bold text-sm`}
          style={{ color: "white", fontWeight:'bold' }}
        >
          Expo store
        </p>
      </div>
    </div>
  );
}

export default Button