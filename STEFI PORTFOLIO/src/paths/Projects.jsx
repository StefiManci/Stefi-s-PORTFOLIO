import styles from "./Projects.module.css"
import portfolioLogo from "../assets/PortfolioImg.png"
import musicStoreLogo from "../assets/MusicStoreImg.png"
import { motion } from "motion/react"

export default function Projects(){
    return(
        <>
         <div className={styles.projectContainer}>
            <div className={styles.header}>
                <div>
                    <h1>My Work</h1>
                </div>
            </div>
            <div className={styles.project}>
                <motion.a whileHover={{scale:1.2, y:-10}} href="https://github.com/StefiManci/Stefi-s-PORTFOLIO"><motion.img whileHover={{scale:1.2, y:-10}} src={portfolioLogo} width="100%" height="100%" alt="" /></motion.a>
            </div>
            <div className={styles.project}>
                <motion.a whileHover={{scale:1.2, y:-10}} href="https://github.com/StefiManci/MusicStore" target="_blank"><motion.img whileHover={{scale:1.2, y:-10}} src={musicStoreLogo} width="100%" height="100%" alt="" /></motion.a>
            </div>
            
         </div>
        </>
    )
}