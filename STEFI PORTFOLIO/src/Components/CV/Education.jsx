import { motion } from "motion/react"
import styles from "./Education.module.css"
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Education(){
    const ref = useRef(null);
const isInView = useInView(ref);
    return(
        <>
        <div className={styles.educationContainer}>
            <div className={styles.education}>
                <motion.h1 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>EDUCATION AND TRAINING</motion.h1>
            </div>
            <div className={styles.education}>
                <motion.h3 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>14/09/2019 – 11/06/2022 Korce, Albania</motion.h3>
                <motion.h2 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>High-School </motion.h2>
                <motion.p initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Webside: <a href="https://www.facebook.com/p/Gjimnazi-Themistokli-G%C3%ABrmenji-faqja-zyrtare-100057086485370/?paipv=0&eav=AfYNx5W2tmuM5l5E1YRS4sfP2mKcVYy49nfo14LUPQPzwitH1l3RQZvvUgbFUt4b4mE&_rdr">High School</a></motion.p>
            </div>
            <motion.div initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}} className={styles.education}>
            <h3>13/10/2022 – CURRENT Tirane, Albania</h3>
                <h2>University-Faculty of Natural Sciences-Computer Science</h2>
                <p>Webside: <a href="https://fshn.edu.al/">High School</a></p>
            </motion.div>
            <motion.div initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}} className={styles.education}>
            <h3>30/03/2023 – 30/06/2023 Tirane, Albania </h3>
                <h2>Training on Data Structures and Algorithms TiranaIT</h2>
                <p>Webside: <a href="http://www.tiranait.education/">University</a></p>
            </motion.div>
            <div ref={ref} className={styles.education}>
                {isInView ?<motion.h3 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>20/06/2023 – 02/09/2024 </motion.h3> :"" }
                {isInView ?<motion.h2 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Online course on udemy about --Full Stack Web-Development </motion.h2>:""}
                {isInView ?<motion.p initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Webside: <a href="http://www.udemy.com/">Udemy</a></motion.p>:""}
            </div>
            <div ref={ref} className={styles.education}>
                {isInView ? <motion.h3 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>15/04/2024 – 14/07/2024 Tirane, Albania </motion.h3>:""}
                {isInView ?<motion.h2 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Intership On ASP .NET back-end development Pragmatic.al</motion.h2>:""}
                {isInView ?<motion.p initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Webside: <a href="https://www.pragmatic.al/">Pragmatic</a></motion.p>:""}
            </div>
            <div ref={ref} className={styles.education}>
                {isInView ? <motion.h3 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>14/06/2024 – 11/09/2024</motion.h3>:""}
                {isInView ? <motion.h2 initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Online course on udemy about --React</motion.h2>:""}
                {isInView ? <motion.p initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>Webside: <a href="http://www.udemy.com/">Udemy</a></motion.p>:""}
            
                
           
            </div>
        </div>
        
        </>
    )
}