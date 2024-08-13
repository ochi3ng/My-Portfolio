import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center text-zinc-200">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="News Web App"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://linkedin-clon-yt.web.app/"
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://ecommerce-demo.com"
                />
                <ProjectsCard
                    title="Domestic Web App"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://photogram-e48d5.web.app/"
                />
                <ProjectsCard
                    title="Nike store commers"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://nike-store-web.vercel.app/"
                />
                <ProjectsCard
                    title="Food Delivery"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://food-order-24384.web.app/"
                />
                <ProjectsCard
                    title="Fashion Shop"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    demoLink="https://fashion-shop-demo.com"
                />
            </div>
        </section>
    );
}

export default Projects;
