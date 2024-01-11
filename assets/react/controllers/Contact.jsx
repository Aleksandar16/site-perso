import React, {useEffect, useState} from "react";
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
} from "@material-tailwind/react";
import {
    PlusIcon,
} from "@heroicons/react/24/outline";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
    const labelProps = {
        variant: "small",
        color: "white",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, 300);
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 h-80 transition delay-300 duration-500 ${isShown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute bottom-0 right-0">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full bg-amber-800">
                            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction className="relative">
                            <a href="mailto:a.milenkovic321@gmail.com" target="_blank">
                                <IoIosMail className="h-5 w-5 hover:text-amber-500 duration-300" />
                            </a>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <a href="https://www.linkedin.com/in/aleksandar-milenkovic-b82737231/" target="_blank">
                                <FaLinkedin className="h-5 w-5 hover:text-amber-500 duration-300" />
                            </a>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <a href="https://github.com/Aleksandar16" target="_blank">
                                <FaGithub className="h-5 w-5 hover:text-amber-500 duration-300" />
                            </a>
                        </SpeedDialAction>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
        </div>
    );
}

export default Contact;
