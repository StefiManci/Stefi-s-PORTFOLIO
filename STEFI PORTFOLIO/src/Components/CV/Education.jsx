import styles from "./Education.module.css"


export default function Education(){
    return(
        <>
        <div className={styles.educationContainer}>
            <div className={styles.education}>
                <h1>EDUCATION AND TRAINING</h1>
            </div>
            <div className={styles.education}>
                <h3>14/09/2019 – 11/06/2022 Korce, Albania</h3>
                <h2>High-School </h2>
                <p>Webside: <a href="https://www.facebook.com/p/Gjimnazi-Themistokli-G%C3%ABrmenji-faqja-zyrtare-100057086485370/?paipv=0&eav=AfYNx5W2tmuM5l5E1YRS4sfP2mKcVYy49nfo14LUPQPzwitH1l3RQZvvUgbFUt4b4mE&_rdr">High School</a></p>
            </div>
            <div className={styles.education}>
            <h3>13/10/2022 – CURRENT Tirane, Albania</h3>
                <h2>University-Faculty of Natural Sciences-Computer Science</h2>
                <p>Webside: <a href="https://fshn.edu.al/">High School</a></p>
            </div>
            <div className={styles.education}>
            <h3>30/03/2023 – 30/06/2023 Tirane, Albania </h3>
                <h2>Training on Data Structures and Algorithms TiranaIT</h2>
                <p>Webside: <a href="http://www.tiranait.education/">University</a></p>
            </div>
            <div className={styles.education}>
            <h3>20/06/2023 – 02/09/2024 </h3>
                <h2>Online course on udemy about --Full Stack Web-Development </h2>
                <p>Webside: <a href="http://www.udemy.com/">Udemy</a></p>
            </div>
            <div className={styles.education}>
            <h3>15/04/2024 – 14/07/2024 Tirane, Albania </h3>
                <h2>Intership On ASP .NET back-end development Pragmatic.al</h2>
                <p>Webside: <a href="https://www.pragmatic.al/">Pragmatic</a></p>
            </div>
            <div className={styles.education}>
            <h3>14/06/2024 – 11/09/2024</h3>
                <h2>Online course on udemy about --React</h2>
                <p>Webside: <a href="http://www.udemy.com/">Udemy</a></p>
            </div>
        </div>
        
        </>
    )
}