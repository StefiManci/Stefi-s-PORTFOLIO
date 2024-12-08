import { TypeAnimation } from 'react-type-animation';

export default function AboutText(){
    return(
        <>
        <TypeAnimation
          sequence={[
            "Hello There,My name is Stefi Manci 21 years old, and I am a student  with a background in full-stack web development. With 0 years of experience in Development but i am looking forward to start my first dream job {Development}, I have developed a strong skill set in HTML,JS,CSS,REACT,NODE,C,C++,JAVA, ASP.NET etc..I am particularly passionate about FULL-STACK WEB DEV and continuously seek opportunities to enhance my expertise and contribute to organizational success. I am highly committed to fostering collaboration, driving results, and continuously improving my skills to stay ahead in an ever-evolving industry.Outside of work, I am interested in gym,sports,learning,driving , which further enhances my professional growth.I look forward to connecting and discussing how we might collaborate or explore opportunities together.Thank you for your time.",
            2000, // Waits 1s
          ]}
          wrapper="span"
          speed={50}
          cursor={true}
          repeat={0}
          style={{ fontSize: '1.5em',display:"flex", justifyContent:"center" }}
        />
        </>
    )
}