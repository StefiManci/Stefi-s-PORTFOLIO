import { motion } from "motion/react"


export default function ContactInformation({page}){
   if(page==="none"){
    return(
        <>
        <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>PLEASE CHOOSE A CONTACT OPTION!</motion.h1>
        </div>
        </>
    )
   }else if(page==="Whatsapp"){
    return(
        <>
        <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My WhatsApp:0685167444</motion.h1>
        </div>
        </>
    )
   }else if(page==="Github"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Github:<a style={{color:"red",textDecoration:"none"}} href="https://github.com/StefiManci" target="_blank"> Stefi Github</a></motion.h1>
        </div>
        </>
    )
   }else if(page==="Instagram"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Instagram:<a style={{color:"red",textDecoration:"none"}} href="https://www.instagram.com/_stefi__m/profilecard/?igsh=MXJoa2t5MDgxN291ag==" target="_blank">Stefi Instagram</a></motion.h1>
        </div>
        </>
    )
   }else if(page==="LinkedIn"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My LinkedIn:<a style={{color:"red",textDecoration:"none"}} href="https://www.linkedin.com/in/stefi-manci-7630712a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Stefi LinkedIn</a></motion.h1>
        </div>
        </>
    )
   }else if(page==="Email"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Email: stefi.manci1@gmail.com</motion.h1>
        </div>
        </>
    )
   }else if(page==="Phone"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Phone Number: 0685167444</motion.h1>
        </div>
        </>
    )
   }
}