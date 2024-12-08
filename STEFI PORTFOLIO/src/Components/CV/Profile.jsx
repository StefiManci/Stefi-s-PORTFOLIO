import logo from "./ProfilePhoto.jpeg"
import styles from "./Profile.module.css"
export default function Profile(){
    return(
        <>
        <div className={styles.imageContainer}>
            <img src={logo} alt="" width="100%" height="80%" />
            <h3>Stefi Manci</h3>
        </div>
        
        </>
    )
}