import React from "react";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/helpers/constants";
import Link from "next/link";
import { FloatingDock } from "../ui/floating-dock";
import { Linkedin } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<Link href={"/"} className="logo left">Ashutosh Kumar</Link>
				<FloatingDock items={navbarLinks} />
				<div className="right">
					<Link href={"https://www.linkedin.com/in/incoderweb/"} target="_blank"><Button className="ml-3 text-[.9rem] flex justify-center items-center">Linked -<Linkedin className="size-4 ml-1" /></Button></Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
