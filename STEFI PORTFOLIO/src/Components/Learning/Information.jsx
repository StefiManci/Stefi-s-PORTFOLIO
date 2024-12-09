import { motion } from "motion/react"
import styles from "./Information.module.css"

export default function Information({value}){
    if(value==="React"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:React</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="Html"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Title:Html</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="Css"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:CSS</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="Javascript"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:Javascript</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="C"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="C++"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C++</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value===".Net"){
        return(
            <>
       <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title: .Net</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="Java"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Title:Java</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }else if(value==="C#"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C#</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
        </motion.div>
            </>
        )
    }
}