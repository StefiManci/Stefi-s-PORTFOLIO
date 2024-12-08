import logo from "../assets/ProfilePhoto.jpeg"
import AboutText from "../Components/AboutText"
import {motion} from "motion/react"
export default function About(){
    return(
        <>
         <div className="landing-container">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,type:"spring",ease:"easeIn"}} className="landing-image">
                <img src={logo} width="100%" height="100%" alt="" />
            </motion.div>
            <motion.div initial={{opacity:0,y:200}} animate={{opacity:1,y:0}} transition={{duration:3,type:"spring",ease:"easeIn"}} className="landing-message">
                <AboutText></AboutText>
            </motion.div>
        </div>
        </>
    )
}