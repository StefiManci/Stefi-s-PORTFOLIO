import logo from "./STEFI.png"
import styles from "./Profile.module.css"
import { motion } from "motion/react"
export default function Profile(){
    return(
        <>
        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:3,type:"spring",ease:"easeIn"}} className={styles.imageContainer}>
            <img src={logo} alt="" width="100%" height="80%" />
            <h3>Stefi Manci</h3>
        </motion.div>
        
        </>
    )
}