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
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My WhatsApp:</motion.h1>
        </div>
        </>
    )
   }else if(page==="Facebook"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Facebook:</motion.h1>
        </div>
        </>
    )
   }else if(page==="Instagram"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Instagram:</motion.h1>
        </div>
        </>
    )
   }else if(page==="LinkedIn"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My LinkedIn:</motion.h1>
        </div>
        </>
    )
   }else if(page==="Email"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Email:</motion.h1>
        </div>
        </>
    )
   }else if(page==="Phone"){
    return(
        <>
         <div>
            <motion.h1 key={page} initial={{scale:0}} animate={{scale:1}} transition={{duration:1,type:"spring",ease:"easeIn"}}>My Phone Number:</motion.h1>
        </div>
        </>
    )
   }
}