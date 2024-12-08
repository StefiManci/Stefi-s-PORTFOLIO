import styles from "./Modal.module.css"
import {Link} from "react-router-dom"
export default function Modal({close}){
    return(
        <>
        <dialog open>
            <div className={styles.container}>
                <div>
                    <h2>To learn more about me learning this language click "Learning" below!</h2>
                </div>
                <div className={styles.buttons}>
                <button autoFocus onClick={close}> Close</button>
                <Link to="/Learning" style={{color:"white",textDecoration:"none"}}>Learning</Link>
                </div>
            </div>
        </dialog>
        </>
    )
}