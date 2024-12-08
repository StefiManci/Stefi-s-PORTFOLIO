import styles from "./Language.module.css"

export default function Language(){
    return(
        <>
            <div className={styles.languageContainer}>
                <h2>Languages</h2>
                <p>Mother Tongue: Albanian</p>
                <p>English:</p>
                <ul>
                    <li>Listening--{">"} C2</li>
                    <li>Reading--{">"} C2</li>
                    <li>Writing--{">"} C2</li>
                    <li>Spoken production--{">"} B2</li>
                    <li>Spoken interaction--{">"} B2</li>
                </ul>
            </div>
        </>
    )
}