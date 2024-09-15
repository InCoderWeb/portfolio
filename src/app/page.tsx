"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { heroFlipTexts } from "@/helpers/constants";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { CircleDot, CopyCheckIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeInUpAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.3,
			duration: 1.5,
		},
	},
};

const zoomUpAnimation: Variants = {
	hidden: {
		scale: 0.8,
	},
	show: {
		scale: 1,
		transition: {
			staggerChildren: 0.3,
			duration: 1.5,
		},
	},
};

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="container mx-10">
					<motion.div
						initial="hidden"
						animate="show"
						variants={fadeInUpAnimation}
						className="left z-[9]"
					>
						<motion.p
							variants={fadeInUpAnimation}
							className="text-lg text-white/90"
						>
							Hi 👋, my name is
						</motion.p>
						<motion.h1
							variants={fadeInUpAnimation}
							className="text-[3rem] md:text-[3.4rem] playpen-sans-regular"
						>
							Ashutosh Kumar
						</motion.h1>
						<motion.h1
							variants={fadeInUpAnimation}
							className="text-[1.5rem] text-white/90 tracking-wider"
						>
							I&apos;m a
							<FlipWords
								words={heroFlipTexts}
								duration={2000}
								className="text-white"
							/>
						</motion.h1>
						<motion.p
							variants={fadeInUpAnimation}
							className="mt-1 w-[25rem] text-white/50 tracking-wide"
						>
							An enthusiastic programmer, tech enthusiast, and
							creative problem solver passionate about building
							innovative solutions and mastering the latest
							technologies.
						</motion.p>

						<motion.div
							variants={fadeInUpAnimation}
							className="mt-4 flex justify-start items-center"
						>
							<Button className="heroBtn">
								<CircleDot className="size-4 mr-2" /> Hire Me
							</Button>
							<Button className="heroBtn">
								<CopyCheckIcon className="size-4 mr-2" /> Copy
								Email
							</Button>
						</motion.div>
					</motion.div>
					<motion.div
						initial="hidden"
						animate="show"
						variants={zoomUpAnimation}
						className="right"
					>
						<BackgroundLines>
							<motion.img
								variants={zoomUpAnimation}
								src={"/assets/images/hero.png"}
								alt="My Bitmoji"
							/>
						</BackgroundLines>
					</motion.div>
				</div>
			</section>
		</>
	);
}
