import logo from "../assets/LandingImage.png"
import WelcomeText from "../Components/WelcomeText"
import {motion} from "motion/react"
export default function Home(){
    return(
        <>
        <div className="landing-container">
            <motion.div initial={{y:-500,opacity:0}} animate={{y:0,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }} className="landing-image">
                <img src={logo} width="100%" height="100%" alt="" />
            </motion.div>
            <motion.div initial={{y:-500}} animate={{y:0}} transition={{ duration: 3,type:"spring", ease: "linear" }} className="landing-message">
                <WelcomeText></WelcomeText>
            </motion.div>
        </div>
        </>
    )
}