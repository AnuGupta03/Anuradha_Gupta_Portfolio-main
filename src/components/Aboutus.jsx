import { Skillcards } from "./Cards/Skillscards"
export function Aboutus(){
    return <div className="max-w-[1200px] mx-auto px-6">
            <div id="Aboutid" className="h-full w-full">
                <div className="text-4xl font-bold text-white flex justify-center sm:justify-start">About</div>
                <div className="pt-2 text-sl font-bold text-white">I'm a FrontEnd Developer I Have more then 1.5years of experience in Technical Field. Proficiency in JavaScript, HTML, CSS, and Git. Learning React, Redux, Node.js, Express.js, Next.js. I bring a comprehensive skill set to the development landscape. My commitment to continual learning is evidenced by my quick adaptability and eagerness to broaden my knowledge base. Recognized as a dedicated team player, I am enthusiastic about collaborative efforts to conceive and deliver exceptional applications. My professional approach and passion for web development fuel my commitment to contributing meaningfully to collaborative projects I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</div>
                
                <div className="text-4xl font-bold text-white flex justify-center sm:justify-start mt-16">Skills</div>
                <div className="mt-8 grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-4">
                    <Skillcards image="https://cdn-icons-png.flaticon.com/512/174/174854.png" name="HTML"/>
                    <Skillcards image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" name="CSS"/>
                    <Skillcards image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" name="Javascript"/>
                    <Skillcards image="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" name="React JS"/>
                    <Skillcards image="https://amangupta.site/node.png" name="Node Js"/>
                    <Skillcards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMljNHtufEhORorpm03zCLtzlnY2R_gvx4cZYwSh_auF0rSZvjFO5kALPmyDgj9axhleY&usqp=CAU" name="Express"/>
                    <Skillcards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU" name="GitHub"/>
                    <Skillcards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU" name="Tailwind"/>
                    <Skillcards image="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256" name="MongoDB"/>
                    <Skillcards image="https://cdn.iconscout.com/icon/premium/png-512-thumb/python-2752092-2284909.png?f=webp&w=256" name="Python"/>

                </div>
            </div>
    </div>
}

