import styles from "./ContactButton.module.css"
import {motion} from "motion/react"
export default function ContactButton({name,onClick,page}){
    return(
        
        <>
        <motion.button initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{ease:"circIn",type:"spring"}} style={{backgroundColor:name===page ? "black" : "",color:name===page ? "white" : "" }} className={`${styles.button}`} onClick={onClick}>{name}</motion.button>
        </>
    )
}