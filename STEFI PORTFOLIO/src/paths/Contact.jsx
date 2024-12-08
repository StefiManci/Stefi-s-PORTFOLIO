import ContactButton from "../Components/ContactButton";
import ContactImage from "../Components/ContactImage";
import ContactInformation from "../Components/ContactInformation";
import styles from "./Contact.module.css"
import { useState } from "react";
import {motion} from "motion/react"
export default function Contact(){

    const[source,setSource]=useState("none");

    function handleClick(value){
        setSource(value);
    }

    return(
        <>
         <div className="landing-container">
            <div className="landing-image">
                <ContactImage value={source}></ContactImage>
            </div>
            <div>
                <div className={styles.contactoptions}>
                <ContactButton name="Whatsapp"  page={source}  onClick={()=>handleClick("Whatsapp")}></ContactButton>
                <ContactButton name="Instagram"  page={source} onClick={()=>handleClick("Instagram")} ></ContactButton>
                <ContactButton name="Facebook"  page={source} onClick={()=>handleClick("Facebook")}></ContactButton>
                <ContactButton name="LinkedIn"  page={source} onClick={()=>handleClick("LinkedIn")}></ContactButton>
                <ContactButton name="Email"  page={source} onClick={()=>handleClick("Email")}></ContactButton>
                <ContactButton name="Phone"  page={source} onClick={()=>handleClick("Phone")}></ContactButton>
            </div>
            <div className={styles.information}>
                <ContactInformation page={source}></ContactInformation>
            </div>
            </div>
            
        </div>
        </>
    )
}