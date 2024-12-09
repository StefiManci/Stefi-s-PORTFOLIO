
import { AnimatePresence } from "motion/react"
import Contact from "../Components/CV/Contact"
import DigitalSkills from "../Components/CV/DigitalSkills"
import Education from "../Components/CV/Education"
import Introduction from "../Components/CV/Introduction"
import Language from "../Components/CV/Language"
import Profile from "../Components/CV/Profile"
import Modal from "../Components/Modal"
import styles from "./Cv.module.css"
import { useState } from "react"


export default function Cv(){

    const [value,setValue] = useState(false);
 
    function handleOpen(){
        setValue(true);
    }
    function handleClose(){
        setValue(false)
    }
    return(
        <>
        <AnimatePresence>
         {value ? <Modal close={handleClose}></Modal> : ""}
        </AnimatePresence>
  
         <div className={styles.container}>
            <div className={styles.profile}>
                <Profile></Profile>
            </div>
            <div className={styles.introduction}>
                <Introduction></Introduction>
            </div>
            <div className={styles.contact}>
                <Contact></Contact>
            </div>
            <div className={styles.education}>
                <Education></Education>
            </div>
            <div className={styles.language}>
                <Language></Language>
            </div>
            <div className={styles.digital}>
                <DigitalSkills open={handleOpen}></DigitalSkills>
            </div>
         </div>
        </>
    )
}