import React from 'react';
import {Button, CardBody, CardHeader, Chip, Typography} from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const ProjectCard = ({item, technologies}) => {
    return (
        <>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-2 uppercase">
                    {item.type}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 break-all">
                    {item.name}
                </Typography>
                <Typography color="gray" className="mb-2 font-normal">
                    {item.shortDescription}
                </Typography>
                <div color="gray" className="mb-4 font-normal flex flex-col gap-y-2">
                    {item.technologies?.map((techSlug, index) => (
                        Object.entries(technologies).map(([key, tech]) => {
                            if (techSlug === tech.slug) {
                                return (
                                    <>
                                        <Chip key={key} size="sm" className={`max-w-fit`} value={tech.name} />
                                        {index === 2 ? <BsThreeDots /> : ''}
                                    </>
                                );
                            }
                            return null;
                        })
                    )).slice(0, 3)}
                </div>
                <a href={item.url} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Voir projet
                        <FaLongArrowAltRight className={`w-5 h-5`} />
                    </Button>
                </a>
            </CardBody>
        </>
    );
}

export default ProjectCard;