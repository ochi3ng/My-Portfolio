import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Front-end Developer.", "Web Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-blue-500 capitalize">John Ochieng</span>
                </h1>
                <h2 className="text-4xl font-bold text-green-400">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-titleFont leading-6 tracking-wide">
                    As a frontend developer, I specialize in creating engaging 
                    and responsive web interfaces that provide a seamless user 
                    experience. With a strong foundation in HTML, CSS, and JavaScript,
                     I leverage modern frameworks and libraries like React to build 
                     dynamic and intuitive applications.
                </p>
            </div>
            Media
            <Media />
        </div>
    );
}

export default LeftBanner