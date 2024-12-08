import {Link, NavLink, Outlet} from "react-router-dom"
import {motion} from "motion/react"
export default function Navigation(){
    return(
        <>
        <div className="navigation">
            <div>
                <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 3, ease: "linear" }} style={{color:"red",fontFamily:"sans-serif",fontSize:"4em"}}>S</motion.span><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 3,delay:1, ease: "linear" }} style={{fontFamily:"sans-serif",fontSize:"3em"}}>t</motion.span><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 3,delay:2, ease: "linear" }} style={{fontFamily:"sans-serif",fontSize:"2em"}}>e</motion.span><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 3,delay:3, ease: "linear" }} style={{fontFamily:"sans-serif",fontSize:"1em"}}>f</motion.span><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 3,delay:4, ease: "linear" }}>i</motion.span>
            </div>
            <div className="nav-container">
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }}>
                 <NavLink to="/" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red",color:"red" } : {};
 }} end>Home</NavLink>    
                </motion.div>
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }}>
                <NavLink to="/About" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red" ,color:"red" } : {};
 }} end>About</NavLink>    
                </motion.div>
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }}>
                <NavLink to="/Contact" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red",color:"red" } : {};
 }} end>Contact</NavLink>    
                </motion.div>
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }}>
                <NavLink to="/CV" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red",color:"red" } : {};
 }} end>CV</NavLink>    
                </motion.div>
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3,type:"spring", ease: "linear" }}>
                <NavLink to="/Learning" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red",color:"red" } : {};
 }} end>Learning</NavLink>    
                </motion.div>
                <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{ duration: 3 ,type:"spring", ease: "linear" }}>
                <NavLink to="/Projects" style={({ isActive }) => {
 return isActive ? { borderBottom:"2px solid red",color:"red" } : {};
 }} end>Projects</NavLink>    
                </motion.div>
            </div>
        </div>
            
            <Outlet></Outlet>
        </>
    )
}



