import styles from "./Language.module.css"
import { useRef } from "react";
import { motion, useInView } from "motion/react";
export default function Language(){
    const ref = useRef(null);
const isInView = useInView(ref);
    return(
        <>
            <div ref={ref} className={styles.languageContainer}>
                {isInView? <motion.h2 initial={{scale:0,x:-500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Languages</motion.h2>:""}
                {isInView? <motion.p initial={{scale:0,x:-500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Mother Tongue: Albanian</motion.p>:""}
                {isInView?                <motion.p initial={{scale:0,x:-500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>English:</motion.p>:""}
                {isInView?   <motion.ul initial={{scale:0,x:-500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>
                    <li>Listening--{">"} C2</li>
                    <li>Reading--{">"} C2</li>
                    <li>Writing--{">"} C2</li>
                    <li>Spoken production--{">"} B2</li>
                    <li>Spoken interaction--{">"} B2</li>
                </motion.ul> :""}
             
            </div>
        </>
    )
}