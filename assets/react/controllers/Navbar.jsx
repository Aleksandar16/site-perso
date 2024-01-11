import React, { useState, useEffect } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export function NavbarMenu() {
    const [animate, setAnimate] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    let lastScrollTop = 0;

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            setShowHeader(!(currentScrollTop > lastScrollTop && currentScrollTop > 300));
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItem = (text, id) => (
        <li className="p-1 font-normal">
            <a href={`${id}`} className="no-swup flex items-center text-white text-lg hover:text-amber-400 duration-300">
                {text}
            </a>
        </li>
    );

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-x-12 lg:flex-row lg:items-center lg:gap-12 lg:mb-0 lg:mt-0">
            {navItem("Accueil", "/")}
            {navItem("Projets", "/#project")}
            {navItem("Technologies", "/#technology")}
            {navItem("Parcours", "/#course")}
        </ul>
    );

    return (
        <div>
            <Navbar className={`shadow-md absolute bg-gray-900 border-none bg-opacity-80 rounded-none z-50 max-w-full h-20 transition duration-500 ease-in-out 
            ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className={`h-full flex items-center justify-between transition duration-500 ease-in-out
                 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <a href="/" className="no-swup mr-4 cursor-pointer py-1.5 font-medium text-white">
                        Material Tailwind
                    </a>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto lg:hidden z-60"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {!openNav ? <RxHamburgerMenu className="text-white scale-150" />
                                : <RxCross1 className="text-white scale-150" />
                            }
                        </IconButton>
                    </div>
                </div>
            </Navbar>
            <div className={`fixed top-0 right-0 bg-gray-900 w-[80%] h-screen z-80 transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <IconButton
                    variant="text"
                    className="ml-auto fixed top-8 right-8 lg:hidden z-60"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {!openNav ? <></>
                        : <RxCross1 className="text-white scale-150" />
                    }
                </IconButton>
                <ul className="pt-[50%] mb-4 flex flex-col gap-x-4 gap-y-12 lg:flex-row lg:items-center lg:gap-6 lg:mb-0 lg:mt-0">
                    <ul className={`flex flex-col items-center gap-y-8`}>
                        {navItem("Accueil", "/")}
                        {navItem("Projets", "/#project")}
                        {navItem("Technologies", "/#technology")}
                        {navItem("Parcours", "/#course")}
                    </ul>
                    <div className={"flex flex-row justify-between mx-[35%]"}>
                        <a href="mailto:a.milenkovic321@gmail.com" target="_blank" className={"text-white hover:text-amber-400 duration-300"}>
                            <FaMailBulk className="h-7 w-7 hover:text-amber-400 duration-300" /></a>
                        <a href="https://www.linkedin.com/in/aleksandar-milenkovic-b82737231/" target="_blank" className={"text-white hover:text-amber-400 duration-300"}>
                            <FaLinkedin className="h-7 w-7 hover:text-amber-400 duration-300" /></a>
                        <a href="https://github.com/Aleksandar16" target="_blank" className={"text-white hover:text-amber-400 duration-300"}>
                            <FaGithub className="h-7 w-7 hover:text-amber-400 duration-300" /></a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default NavbarMenu;
