import styles from "./Information.module.css"

export default function Information({value}){
    if(value==="React"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:React</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="Html"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:Html</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="Css"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:CSS</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="Javascript"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:Javascript</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="C"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:C</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="C++"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:C++</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value===".Net"){
        return(
            <>
       <div className={styles.display}>
            <h1>Title: .Net</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="Java"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:Java</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }else if(value==="C#"){
        return(
            <>
        <div className={styles.display}>
            <h1>Title:C#</h1>
        </div>
        <div className={styles.display}>
            <h1>Learning Route:</h1>
        </div>
        <div className={styles.display}>
            <h1>Description:</h1>
        </div>
            </>
        )
    }
}