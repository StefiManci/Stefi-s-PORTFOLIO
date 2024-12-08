import { TypeAnimation } from 'react-type-animation';
import styles from "./WelcomeText.module.css"
export default function WelcomeText(){
    return (
        <div className={styles.container}>
            <TypeAnimation
          sequence={[
            'WELCOME HUMAN',
            2000, // Waits 1s
            'THANK YOU FOR VISITING US', // Deletes 'One' and types 'Two'
            4000,
            'WELCOME!'
             // Waits 2s
          ]}
          wrapper="span"
          speed={75}
          deletionSpeed={60}
          cursor={true}
          repeat={0}
          style={{ fontSize: '4em',display:"flex", justifyContent:"center" }}
        />
        <TypeAnimation
          sequence={[
            'My Name Is Stefi Manci', // Types 'One'
            2000, // Waits 1s
            'I AM A FUTURE WEB-DEVELOPER', // Deletes 'One' and types 'Two'
            4000, // Waits 2s
            'I AM A FUTURE FULL-STACK DEVELOPER',
            1000,
            'STEFI MANCI {DEVELOPER}'
             // Types 'Three' without deleting 'Two'
          ]}
          wrapper="span"
          cursor={true}
          speed={75}
          deletionSpeed={60}
          repeat={0}
          style={{ fontSize: '4em',display:"flex", justifyContent:"center",color:"green" }}
        />
        </div>
        
      );
}