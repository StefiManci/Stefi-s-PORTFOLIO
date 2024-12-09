import { motion } from "motion/react"


export default function Introduction(){
    return(
        <>
        <motion.div initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>
            <h1>About Me</h1>
        </motion.div>
        <motion.div initial={{scale:0,x:500,opacity:0}} animate={{scale:1,x:0,opacity:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>
            <p>
 Hello! My name is Stefi Manci i was born and grew up in the city of Korce,Albania.Since i was a
 kid i was very passionate about computers and how they work.Growing up i realised that i could
 be someone who creates the things i liked most on my childhood, i started loving programming
 and developing things.I have a big desire learning to develop and doing it gives me joy.One of
 my most important objectives is to never stop learning new programming based technologies
 and to never stop improving.I am a very social and cooperative person who likes working in
 groups and growing together.
            </p>
        </motion.div>
        </>
    )
}