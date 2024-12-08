import Skills from "../Components/CV/Skills"
import Image from "../Components/Learning/Image";
import Information from "../Components/Learning/information";
import styles from "./Learning.module.css"
import { useState } from "react";
export default function Learning(){
 
const [isChosen,setIsChoosen]= useState("");
const [isShowing,setIsShowing]=useState(true);

function handleChange(type){
  setIsChoosen(type);
  setIsShowing(!isShowing);
}

    return(
        <>
        {isShowing ? <div className={styles.icon}>
         <Skills change={handleChange}></Skills>
         </div>: ""}
         <div className={styles.languages}>
          <Image value={isChosen} change={handleChange}></Image>
         </div>
         <div className={styles.information} >
          <Information value={isChosen}></Information>
         </div>
        </>
    )
}