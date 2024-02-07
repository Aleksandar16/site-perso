import React from 'react';
import {Button, CardBody, CardHeader, Chip, Tooltip, Typography} from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const ProjectCard = ({item, technologies}) => {
    return (
        <>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-start"
            >
                <img
                    src={item.mainImage}
                    alt="Image du projet"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-2 uppercase">
                    {item.type} - {item.year}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 break-all">
                    {item.name}
                </Typography>
                <Typography color="gray" className="mb-2 font-normal">
                    {item.shortDescription}
                </Typography>
                <div color="gray" className="mb-4 font-normal flex flex-wrap gap-2">
                    {item.technologies?.map((techSlug) => (
                        Object.entries(technologies).map(([key, tech]) => {
                            if (techSlug === tech.slug) {
                                return (
                                    <>
                                        <Chip key={key} size="sm" className={`max-w-fit`} value={tech.name} />
                                    </>
                                );
                            }
                            return null;
                        })
                    )).slice(0, 3)}
                    {item.technologies.length > 3 &&
                        <Tooltip
                            content={
                                item.technologies.map(techSlug => {
                                    const tech = Object.values(technologies).find(t => t.slug === techSlug);
                                    return tech ? tech.name : '';
                                }).slice(3).join(', ')
                            }
                            placement="bottom"
                        >
                            <Button><BsThreeDots /></Button>
                        </Tooltip>
                    }
                </div>
                <a href={item.url} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Voir
                        <FaLongArrowAltRight className={`w-5 h-5`} />
                    </Button>
                </a>
            </CardBody>
        </>
    );
}

export default ProjectCard;