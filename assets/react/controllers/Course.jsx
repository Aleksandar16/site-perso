import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import { BsBank2 } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

export function Course() {

    return (
        <div className={`mt-16 grid grid-cols-1 lg:grid-cols-2 justify-around gap-24 mx-6 lg:mx-24`}>
            <div>
                <p className="text-2xl text-amber-600 text-center mb-12">Scolaire</p>
                <Timeline>
                    <TimelineItem className="h-28">
                        <TimelineConnector className="!w-[78px]" />
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color={`blue-gray`}>
                                <IoSchool className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    Licence Générale Informatique (1 an) -
                                    <a className={`underline underline-offset-2 ml-1 hover:text-amber-600 duration-300`}
                                       href={`https://enseignement-superieur.lycee-stvincent.fr/licence`} target={`_blank`}>
                                        Lycée St Vincent
                                    </a>
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    2022 - 2023
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                        <TimelineConnector className="!w-[78px]" />
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color="blue-gray">
                                <IoSchool className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    BTS SIO Option SLAM (2 ans) -
                                    <a className={`underline underline-offset-2 ml-1 hover:text-amber-600 duration-300`}
                                       href={`https://enseignement-superieur.lycee-stvincent.fr/bts`} target={`_blank`}>
                                        Lycée St Vincent
                                    </a>
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    2020 - 2022
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color="green">
                                <FaSchool className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    Baccaluréat Scientifique -
                                    <a className={`underline underline-offset-2 ml-1 hover:text-amber-600 duration-300`}
                                       href={`https://jean-rostand-chantilly.ac-amiens.fr/`} target={`_blank`}>
                                        Lycée Jean Rostand
                                    </a>
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    2017 - 2020
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                </Timeline>
            </div>
            <div>
                <p className="text-2xl text-amber-600 text-center mb-12">Professionel</p>
                <Timeline>
                    <TimelineItem className="h-28">
                        <TimelineConnector className="!w-[78px]" />
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color={`blue`}>
                                <TbWorldWww className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    Alternance chez
                                    <a className={`underline underline-offset-2 ml-1 mr-1 hover:text-amber-600 duration-300`}
                                       href={`https://mentalworks.fr/`} target={`_blank`}>
                                        Mentalworks
                                    </a>
                                    - Année de Licence Générale Informatique
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Septembre 2022 - Août 2023
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                        <TimelineConnector className="!w-[78px]" />
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color="red">
                                <BsBank2 className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    Stage chez
                                    <a className={`underline underline-offset-2 ml-1 mr-1 hover:text-amber-600 duration-300`}
                                       href={`https://www.caceis.com/fr/`} target={`_blank`}>
                                        CACEIS
                                    </a>
                                    - 2ème année de BTS SIO Option SLAM
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Janvier 2022 - Février 2022
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className="h-28">
                        <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost" color="red">
                                <BsBank2 className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                                <Typography variant="h6" color="blue-gray">
                                    Stage chez
                                    <a className={`underline underline-offset-2 ml-1 mr-1 hover:text-amber-600 duration-300`}
                                       href={`https://www.caceis.com/fr/`} target={`_blank`}>
                                        CACEIS
                                    </a>
                                    - 1ère année de BTS SIO Option SLAM
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    Juin 2021
                                </Typography>
                            </div>
                        </TimelineHeader>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}

export default Course;
