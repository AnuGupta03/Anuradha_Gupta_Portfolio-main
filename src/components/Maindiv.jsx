import React from 'react';
import { TypeAnimation } from 'react-type-animation';
export function Maindiv(){
    return <main className="max-w-[1400px] mx-auto h-screen flex flex-col-reverse lg:flex-row lg:gap-32 items-center justify-center px-6">
                <div className="ml-2 sm:ml-24 lg:h-full w-full lg:w-1/2 text-white flex flex-col justify-center items-start">
                    <h1 className="py-6 mt-0 sm:mt-28 my-12 font-bold text-4xl sm:text-6xl ">Hello, I'm
                        <div className="bg-sky-600 pt-5 font-bold -mt-10 sm:-mt-5 ">

                        <TypeAnimation
                                sequence={[
                                    'Anuradha Gupta',
                                    1000,
                                    'FrontEnd Developer',
                                    1000,
                                    'Web developer',
                                    1000,
                                    'ReactJS Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block', color: "#ffcd67" }}
                                repeat={Infinity}
                                />
                        </div>
                    </h1>
                    <article className='font-bold my-[-90px] sm:my-[-60px] py-7 text-xl'>Transforming ideas into seamless digital experiences with MERN Stack magic</article>
                        <div className=' mt-20 sm:mt-16 h-12 w-36 font-bold p-2 border-2 border-[#ffcd67]  text-center sm:text rounded-2xl  hover:bg-[#ff9e1e]'>
                                    <a href="https://github.com/AnuGupta03/MyCV/blob/main/Anuradha_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit'}}>Download CV</a>
                        </div>
                </div>

                <section className="w-full sm:w-2/4 h-full bg-sky-600 flex justify-center items-center">
                    <div className="mt-48 md:mt-80 xl:mt-0 ml-2 sm:ml-0 border-[30px] text-white w-80 sm:w-96 h-80 sm:h-96  bg-whitey rounded-full overflow-hidden">
                        <img src="https://nextjs-portfolio-mu-tawny.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1364029%2Fscreenshots%2F16093268%2Fmedia%2F68e82a7fb4904614a9066d6b540c14b2.gif&w=640&q=75" alt="CV For FrontEnd, Backend And FullStack Developer. Technology: HTML, CSS, Javascript, React, TailwindCSS, CSS. " className="w-full h-full object-cover"/>
                    </div>
                </section>
        </main>    
}
