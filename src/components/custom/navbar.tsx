import React from "react";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/helpers/constants";
import Link from "next/link";
import { FloatingDock } from "../ui/floating-dock";
import { CircleDot } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<Link href={"/"} className="logo left">Ashutosh Kumar</Link>
				<FloatingDock items={navbarLinks} />
				<div className="right">
					<Button className="ml-3"><CircleDot className="size-4 mr-2" /> Hire Me</Button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
