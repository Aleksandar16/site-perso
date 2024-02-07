import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Card } from "@material-tailwind/react";
import ProjectCard from "../components/ProjectCard";

const Projects = ({projects, technologies}) => {
    let data;
    const [isLoaded, setIsLoaded] = useState({});

    try {
        data = JSON.parse(projects);
    } catch (e) {
        console.error("Erreur de parsing JSON:", e);
        return null;
    }

    let technos = JSON.parse(technologies);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const delay = 200;
                        setTimeout(() => {
                            setIsLoaded(prevState => ({ ...prevState, [entry.target.getAttribute('data-id')]: true }));
                            observer.unobserve(entry.target);
                        }, delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.lazy-card').forEach((card, index) => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, [data]);

    return (
        <div className={'grid gap-x-16 mx-6 grid-cols-1 md:grid-cols-2 lg:mx-16 2xl:grid-cols-3 place-items-center gap-y-16'}>
            {data.map((item) => (
                <Card key={item.id} data-id={item.id} className={`lazy-card w-full max-w-[48rem] h-96 flex-row transition-all ease-in duration-500 transform
                 ${isLoaded[item.id] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <ProjectCard item={item} technologies={technos} />
                </Card>
            ))}
        </div>
    );
};

export default Projects;
