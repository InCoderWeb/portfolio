"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { heroFlipTexts } from "@/helpers/constants";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { CircleDot, CopyCheckIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useClipboard } from "@mantine/hooks";
import Link from "next/link";

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
	const clipboard = useClipboard({ timeout: 1000 });
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	setTimeout(() => setLoading(false), 3300);
	// }, []);
	// if (loading) {
	// 	return (
	// 		<div className="flex justify-center items-center z-[99999999] bg-[#161616] h-full w-full fixed top-0 left-0">
	// 			<InfinitySpin width="200" color="#ffffff" />
	// 		</div>
	// 	);
	// }
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
								duration={3000}
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
							<Link href="/contact">
								<Button className="heroBtn">
									<CircleDot className="size-4 mr-2" /> Hire
									Me
								</Button>
							</Link>
							<Button
								className="heroBtn"
								onClick={() =>
									clipboard.copy(
										"ashutoshtiwary2021@gmail.com"
									)
								}
							>
								<CopyCheckIcon className="size-4 mr-2" />{" "}
								{clipboard.copied ? "Copied" : "Copy Email"}
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
