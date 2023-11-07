import React from 'react'

import {MdArrowDropDown} from "react-icons/md";
import styles from "./Input.module.css"
const Input = (props) => {
    const { defaultValue}=props

    function handleInput (){
        console.log("clicked")
    }

  return (
    <div className={styles.inputItem} onClick={()=>handleInput()}>
        <p className="p__opensans">{defaultValue}</p>
        <span><MdArrowDropDown/></span>
        {/* <ul className={styles.orderTable}>
          <li className={`${styles.activeText} p__opensans`}>{defaultValue}</li>
          <li className="p__opensans">One</li>
          <li className="p__opensans">Two</li>
          <li className="p__opensans">Three</li>
        </ul> */}
    </div>
  )
}

export default Input
