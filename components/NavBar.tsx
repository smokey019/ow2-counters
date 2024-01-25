import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const OW2CLogo = () => (
        <h1 className='font-bold text-2xl text-accent pl-4 lg:px-0'>
            OW2<span className='text-white font-normal ml-1'>Counters</span>
        </h1>
    );

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="border-b border-accent shadow-xl shadow-accent/10">
            <div className="w-1/2 flex justify-between mx-auto py-3">
                <NavbarBrand>
                    <OW2CLogo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className="font-semibold hover:opacity-75 transition-opacity">
                        <Link href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="font-semibold hover:opacity-75 transition-opacity">
                        <Link href="#">
                            Tiers
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="font-semibold hover:opacity-75 transition-opacity">
                        <Link isExternal href="https://github.com/smokey019/ow2-counters" className="flex">
                            <FaGithub className='h-6 w-6 mr-2' /> Source
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </div>
        </Navbar>
    );
}