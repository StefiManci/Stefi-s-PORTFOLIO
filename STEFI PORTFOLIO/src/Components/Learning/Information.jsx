import { motion } from "motion/react"
import styles from "./Information.module.css"

export default function Information({value}){
    if(value==="React"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:React</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route: From 6/12/2024 TO 8/10/2024</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>Started learning the React Library at a Udemy Course made especially for react. I began with the official React documentation, which provided a clear and structured introduction to components, JSX, props, and state. At first, it was a bit challenging to grasp the concept of components and how they interacted, but after building a few simple applications, things started to click.

I practiced by building small projects, such as a to-do list or a weather app, which helped me better understand how to pass data between components, handle events, and use state. As I progressed, I also learned about hooks like useState and useEffect, which revolutionized my approach to managing state and side effects in functional components.

I supplemented my learning by following tutorials and watching video courses that provided hands-on examples. These resources helped reinforce the concepts and exposed me to best practices in React development. Along the way, I also learned how to work with React Developer Tools, which allowed me to debug and optimize my apps more effectively.

As I became more confident with React, I started to explore advanced topics like React Router for navigation, Context API for global state management, and integrating with APIs to fetch data dynamically. I also familiarized myself with component libraries like Material-UI to speed up development and improve UI consistency.

Through consistent practice, experimenting with different projects, and learning from others in the React community, I was able to build a strong foundation in React and continue growing as a developer. React has become an essential tool in my toolkit, and I'm excited to keep learning and building more complex applications in the future. </p>
        </motion.div>
            </>
        )
    }else if(value==="Html"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Title:Html</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:From 20/06/2023 To 02/08/2023</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
                <p>I began learning HTML out of curiosity or a desire to build something on the web.I was drawn to web development, wanted to create a personal website, or was intrigued by how websites are made.I started by researching HTML online and took a Udemy Full-Stack course,where i discovered that HTML is the basic structure behind every webpage.

First Steps:
At first, HTML seemed simple—just a series of tags and elements.I started with the basics: learning about tags like and how they come together to form a webpage.I wrote my first webpage, which was likely a simple page of text and headings.

Learning by Doing:
The best way i probably learned HTML was by practice. As i wrote more code,i began experimenting with additional tags. You created links with  and inserted images with .I learned how to organize content using lists  and created tables with.

Exploring New Concepts:
As my confidence grew, i started understanding how to structure content meaningfully using semantic tags. This helped me make your pages more readable and accessible.I also started using divs and spans to group content and control layouts.

Learning Through Projects:
As i gained more knowledge, i started applying HTML to personal projects.I built a simple portfolio. With each project, i learned more about structuring web content and refining your skills.

Stepping Up:
Over time, HTML became second nature.I discovered how HTML interacts with other technologies, like CSS for styling and JavaScript for interactivity. This opened up even more possibilities for what i could create on the web.</p>

        </motion.div>
            </>
        )
    }else if(value==="Css"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:CSS</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:From 2/08/2023 TO 07/09/2023</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I first started learning CSS, it was a bit overwhelming because there were so many properties and techniques to understand. I began by learning the basics, like how to apply styles to HTML elements using selectors, and how to control the layout with properties like color, font-size, padding, and margin. At first, I mainly followed tutorials and worked through examples to get a feel for how styles could transform the appearance of a webpage.

I quickly realized that CSS is not just about styling individual elements but also about creating layouts. This is where I spent a lot of time learning about positioning, the box model, and how flexbox and grid work. The more I practiced, the more I started to appreciate the power of these layout techniques. Flexbox, in particular, clicked for me because it made building responsive layouts so much easier.

One of the biggest challenges for me was making websites look good on all screen sizes. I dove into responsive design, learning how to use media queries to adjust styles based on the device’s screen width. This made a huge difference in my projects, as I could now create layouts that adapted to phones, tablets, and desktops.

As I progressed, I started experimenting with advanced CSS features like animations and transitions. I loved how adding simple animations could bring a website to life and make it feel more interactive. I also explored CSS preprocessors like Sass, which helped me write cleaner, more organized code with features like variables and nesting.

Throughout my learning journey, I made sure to stay up to date by reading blog posts, watching YouTube tutorials, and browsing CSS galleries for inspiration. Over time, I became more comfortable with the intricacies of CSS, and it became a key part of my web development toolkit. I also learned to troubleshoot issues and refine my code by using tools like browser developer tools to experiment and tweak styles on the fly.

CSS has been a challenging but rewarding skill to master, and it’s incredible to see how much I’ve improved and how I can now design beautiful, responsive websites from scratch. There’s always something new to learn, and I’m excited to keep experimenting with new CSS techniques as I continue to grow as a developer.</p>
        </motion.div>
            </>
        )
    }else if(value==="Javascript"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:Javascript</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:From 07/08/2023 TO 10/12/2023</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I first decided to learn JavaScript, I was excited about the idea of making websites interactive. I started by learning the basics, like variables, data types, and simple control structures such as if statements and loops. At first, it felt a little overwhelming, but I stuck with it because I knew it was a skill that would open up new possibilities for creating dynamic web pages.

I quickly learned about functions and how they allow me to organize my code. I started writing simple functions to handle repetitive tasks, like changing the text of an element on the page or calculating values. This was when I realized that JavaScript was more than just a way to make things work—it was a powerful tool for building structured, reusable code.

As I dug deeper, I learned about first-class functions, which was a game-changer. I learned that in JavaScript, functions are treated as first-class objects, meaning I could pass them around as arguments, return them from other functions, and store them in variables. This opened up a whole new world of possibilities for me, especially in writing cleaner, more modular code.

I also explored callback functions and higher-order functions, which really pushed my understanding of how JavaScript works. I remember experimenting with things like map(), filter(), and reduce(), and feeling a sense of accomplishment when I saw how concise and expressive my code could be.

As I continued learning, I started embracing immutable data and pure functions—two core concepts in functional programming. I learned that writing functions that didn’t modify the original data made my code more predictable and easier to debug. The more I practiced, the more I understood how functional programming principles made my JavaScript code not only efficient but also easier to maintain.

Eventually, I tackled asynchronous JavaScript, learning about callbacks, promises, and async/await. I remember the moment when everything clicked, and I understood how to handle asynchronous code in a way that felt natural and clean.

Through trial and error, online tutorials, and working on small projects, I became more confident in my ability to write JavaScript in a functional style. Today, I find myself gravitating toward writing clean, readable, and reusable code, and I love how functional programming in JavaScript allows me to do just that.</p>
        </motion.div>
            </>
        )
    }else if(value==="C"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:From 20/09/2022 TO 06/06/2023</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I first decided to learn C, I knew it was a powerful language and a great foundation for understanding how computers work at a low level. I started by going through a few beginner tutorials to get a basic understanding of the syntax and structure of C. I learned about variables, data types, and how to write simple programs like "Hello, World!" to get familiar with how a C program is structured.

At first, it felt a bit challenging, especially with memory management, since I was used to languages that handle memory for you automatically. But I realized that understanding how C handles memory with pointers and manual memory management was crucial for becoming a better programmer.

I spent a lot of time working on basic exercises like loops, conditionals, and functions, which helped me understand how to break down problems into smaller, manageable pieces. As I progressed, I started working with arrays and strings, which felt a bit more complex, but practicing these concepts helped me get more comfortable with how data is stored and accessed in C.

One of the things that made a real difference in my learning was reading through code examples and trying to write my own programs. I began experimenting with more advanced topics, such as file handling, structures, and dynamic memory allocation. Working with structures was a turning point for me, as I could now group related data together, making my programs more organized and efficient.

As I encountered challenges, I found myself using debugging tools like gdb to understand what was going wrong in my code, especially when working with memory issues or segmentation faults. This process of debugging taught me to think more carefully about my code and how to solve problems step by step.

Over time, I became more comfortable with pointers, memory management, and understanding how data is stored and accessed. I also learned to use libraries to extend my programs, which opened up new possibilities. Building small projects, like a simple text editor or a calculator, helped me put everything together and see how C could be used for real-world applications.

Learning C was definitely a challenge, but it gave me a deep understanding of programming fundamentals and helped me become a better problem solver. Even today, I continue to apply what I've learned from C to other languages and systems programming tasks, and I know it will always be a valuable part of my programming skillset.</p>
        </motion.div>
            </>
        )
    }else if(value==="C++"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C++</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Learning Route:From 09/09/2023 TO 07/02/2024</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I started learning C++, I was mainly focused on understanding the basic syntax and concepts like variables, loops, and functions. As I got more comfortable, I realized I could apply functional programming ideas to write cleaner, more organized code.

I first learned about functions and how they could help me break problems down into smaller tasks. I liked the idea of using functions to keep my code reusable and modular. Eventually, I started using lambda expressions, which allowed me to write small, anonymous functions right in the place where I needed them.

I also focused on making my data immutable by using const whenever possible. This helped me avoid accidental changes to my data and made my programs more predictable. I found that writing pure functions—functions that don’t change anything outside of themselves—made my code easier to understand and debug.

I used the Standard Template Library (STL) to make my code more functional. I discovered how functions like std::for_each and std::transform could help me work with collections of data in a functional way without needing to write long loops.

By combining these functional programming techniques with my C++ knowledge, I was able to write cleaner, more efficient code that was easier to maintain.</p>
        </motion.div>
            </>
        )
    }else if(value===".Net"){
        return(
            <>
       <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title: .Net</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:From 15/04/2024 TO 14/07/2024</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>During my internship, I had the opportunity to learn .NET ASP MVC (Model-View-Controller) and build web applications. Initially, I was focused on understanding the basic architecture and how to set up models, views, and controllers. As I worked through different projects, I started to explore functional programming principles within the .NET ecosystem.

I learned that in ASP.NET MVC, the key to writing clean and efficient code was to make good use of functions. Instead of writing large, complex methods, I started breaking down tasks into smaller, reusable functions. This approach helped me keep the code modular and maintainable.

I was introduced to higher-order functions, which allowed me to pass functions as parameters to other methods or return functions from other functions. This was especially useful when working with tasks like data transformation or filtering in my controllers and models. I realized that by embracing this functional approach, I could reduce the complexity of my logic and make it more flexible.

Lambda expressions were another powerful tool I learned to use in my code. These helped me write concise, anonymous functions that I could use in LINQ queries and other parts of the code. It was a more functional way to handle collections, and I found myself using LINQ more and more to query data and manipulate collections in a declarative way.

Throughout the internship, I made a conscious effort to use immutable data as much as possible, especially when working with models. This helped reduce side effects and made my application more predictable. I became familiar with using readonly fields and ensured that data in my models was not changed unexpectedly.

I also learned the importance of pure functions—functions that always produce the same output for the same input and do not alter external state. This made my code easier to test and debug. I started writing functions that were independent of external state, ensuring that they didn’t rely on or change data outside of their scope.

As I worked on real-world projects, I combined these functional programming concepts with the MVC pattern, where I used controllers to handle requests and return views, models to represent the data, and views to present the UI. By applying FPP in my controller actions and data manipulation, I was able to make my code cleaner and more efficient.

Overall, the internship taught me how to build web applications using ASP.NET MVC, but it also gave me the chance to apply functional programming principles that helped me write better, more maintainable code.</p>
        </motion.div>
            </>
        )
    }else if(value==="Java"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}}  className={styles.display}>
            <h1>Title:Java</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:09/09/2023 TO 10/06/2024</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I started learning Java, I was initially focused on object-oriented programming because that’s the main paradigm Java is known for. However, as I progressed, I realized that Java also supports functional programming (FPP) principles, and I became excited to explore that side of the language.

I began by learning the basics, like variables, data types, and control structures, but soon I was introduced to functions. I quickly realized that functions in Java could be used to write cleaner, more reusable code. I started writing simple functions to handle tasks like processing input or calculating results.

The concept of first-class functions was something new to me in Java, but I learned that Java allows me to treat functions as objects. I could pass functions as arguments, return them from other functions, and store them in variables. This was a key step in understanding how functional programming works in Java.

As I learned more, I discovered lambda expressions, which allowed me to write concise, anonymous functions. I could use lambdas in places like collections, where I could apply operations like map(), filter(), and reduce() without writing a lot of boilerplate code. This was a huge improvement over the more traditional loop-based approaches, and it made my code more elegant and functional.

I also became familiar with Stream API in Java, which enabled me to perform complex data manipulations using functional-style methods. Streams allowed me to process collections of data in a declarative way, chaining methods together like filter(), map(), and collect() to transform and collect data.

By focusing on immutable data and pure functions, I made my code more predictable and easier to debug. I learned the importance of not changing the state of objects in unexpected ways, which helped avoid side effects and made my programs more reliable.

Throughout my learning, I combined object-oriented and functional programming techniques, using Java’s features to write code that was both efficient and easy to maintain.</p>
        </motion.div>
            </>
        )
    }else if(value==="C#"){
        return(
            <>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Title:C#</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Learning Route:Learning Route:09/09/2023 TO 10/06/2024</h1>
        </motion.div>
        <motion.div key={value} initial={{scale:0,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} transition={{delay:1.5,duration:1,type:"spring"}} className={styles.display}>
            <h1>Description:</h1>
            <p>When I started learning C#, I mainly focused on understanding the basics like variables, loops, and conditions. As I progressed, I discovered that C# also supports functional programming.

I learned that functions were key to writing clean, reusable code. I started using lambda expressions to create small, anonymous functions, which made my code more concise, especially when working with LINQ to query and manipulate data.

I also began using immutable data, which meant making my variables and collections unchangeable. This helped avoid bugs caused by accidental changes to data.

Another important concept was writing pure functions—functions that don’t change anything outside them and always produce the same output for the same input. This made my code easier to test and debug.

I started using higher-order functions, which allowed me to pass functions as arguments or return them from other functions. This helped me write more flexible and reusable code.

Overall, I learned how to apply functional programming techniques like lambda expressions, immutable data, and pure functions to make my C# code cleaner and easier to maintain.</p>
        </motion.div>
            </>
        )
    }
}