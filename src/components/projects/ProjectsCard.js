import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, demoLink }) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img
                    className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                    src={src}
                    alt="Project Preview"
                />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-purple-500 font-normal">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/ochi3ng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            >
                                <BsGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/john-ochieng-42a078245/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {des}
                    </p>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                        View Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard;
