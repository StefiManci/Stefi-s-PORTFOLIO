import Skills from "../Components/Learning/Skills"
import Image from "../Components/Learning/Image";
import Information from "../Components/Learning/information";
import styles from "./Learning.module.css"
import { useState } from "react";
import {motion, AnimatePresence } from "motion/react";
export default function Learning(){
 
const [isChosen,setIsChoosen]= useState("");
const [isShowing,setIsShowing]=useState(true);

function handleChange(type){
  setIsChoosen(type);
  setIsShowing(!isShowing);
}

    return(
        <>
        <AnimatePresence>
          {isShowing ? <motion.div exit={{opacity:0,scale:0}} transition={{duration:1}} className={styles.icon}>
         <Skills change={handleChange}></Skills>
         </motion.div>: ""}
        </AnimatePresence>
        <AnimatePresence>
{!isShowing != "" ? <motion.div exit={{y:10,opacity:0}} transition={{duration:1}}  className={styles.languages}>
          <Image value={isChosen} change={handleChange}></Image>
         </motion.div>:""}
        </AnimatePresence>
        <AnimatePresence>
{!isShowing != "" ? <motion.div exit={{y:10,opacity:0}} transition={{duration:1}}  className={styles.information} >
          <Information value={isChosen}></Information>
         </motion.div>:""}
        </AnimatePresence>
        
         
         
        </>
    )
}