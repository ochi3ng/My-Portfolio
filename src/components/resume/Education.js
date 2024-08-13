import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2009 - 2023</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Sc in Computer Science"
                        subTitle="ALX (2022 (Aug) - 2023 (Feb))"
                        result="3.90/4"
                        des="Earned a Certificate in Computer Science with a strong academic record. Focused on areas such as software engineering, algorithms, and systems design, while also engaging in hands-on projects that honed skills in coding, debugging, and system optimization."
                    />

                    <ResumeCard
                        title="AS - Science & Information"
                        subTitle="Moringa School (2022 -(6-months))"
                        des="Completed an Associate of Science program with a focus on Information Technology, gaining practical experience in software development, data analysis, and network administration. Developed a strong foundation in programming, problem-solving, and project management."
                    />

                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="Ishiru Secondary School (2018 - 2021)"
                        des="Graduated with a perfect score, demonstrating strong academic performance across all subjects. Participated in various extracurricular activities, including debate club and science fairs, which enhanced leadership and teamwork skills."
                    />
                </div>
            </div>
            {/* part Two */}

            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Contract Frontend Developer"
                        subTitle="Angaza Elimu (January 2024 - March 2024)"
                        result="Nairobi"
                        des="Worked as a Contract Frontend Developer in Nairobi, focusing on developing and optimizing educational platforms. Collaborated with the design and backend teams to create user-friendly interfaces, enhancing the learning experience for students."
                    />

                   
                    <ResumeCard
                        title="Junior Front-end Developer"
                        subTitle="Zuri (May 2023 - October 2023)"
                        des="Worked as a Junior Front-end Developer, contributing to the development of responsive and interactive web applications. Gained experience in HTML, CSS, JavaScript, and React, while collaborating with senior developers to implement best practices in front-end development."
                    />

                </div>
            </div>
        </motion.div>
    );
}

export default Education