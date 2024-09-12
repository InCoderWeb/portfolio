import React from "react";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/helpers/constants";
import Link from "next/link";
import { FloatingDock } from "../ui/floating-dock";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<Link href={"/"} className="logo left">Ashutosh Kumar</Link>
				<FloatingDock items={navbarLinks} />
				<div className="right">
					<Button className="ml-3">Hire Me</Button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
