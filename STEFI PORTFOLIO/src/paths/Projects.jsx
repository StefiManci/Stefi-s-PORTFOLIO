import styles from "./Projects.module.css"
import portfolioLogo from "../assets/PortfolioImg.png"
import musicStoreLogo from "../assets/MusicStoreImg.png"
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
                <a href="#"><img src={portfolioLogo} width="100%" height="100%" alt="" /></a>
            </div>
            <div className={styles.project}>
                <a href="https://github.com/StefiManci/MusicStore" target="_blank"><img src={musicStoreLogo} width="100%" height="100%" alt="" /></a>
            </div>
            
         </div>
        </>
    )
}