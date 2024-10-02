// import { FlipWords } from "@/components/ui/flip-words";
// import { heroFlipTexts } from "@/helpers/constants";
"use client";
import { programmingIcons } from "@/helpers/constants";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

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

export default function About() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 3300);
	}, []);
	if (loading) {
		return (
			<div className="flex justify-center items-center z-[99999999] bg-[#161616] h-full w-full fixed top-0 left-0">
				<InfinitySpin width="200" color="#ffffff" />
			</div>
		);
	}
	return (
		<>
			<section className="about pb-[2rem] md:pb-0 mx-[2rem] md:mx-0">
				<div className="container">
					<motion.div
						className="left"
						initial="hidden"
						animate="show"
						variants={fadeInUpAnimation}
					>
						{/* <FlipWords
							words={heroFlipTexts}
							duration={2000}
							className="text-white"
						/> */}
						<motion.h1
							className="text-[3rem] font-semibold tracking-wider playpen-sans-regular"
							variants={fadeInUpAnimation}
						>
							About Me
						</motion.h1>
						<motion.p
							variants={fadeInUpAnimation}
							className="mt-2 mx-[2rem] md:mx-0 tracking-widest text-white/60 max-w-[40rem] text-[0.9rem]"
						>
							Hi there, I&apos;m Ashutosh Kumar, currently
							pursuing an Integrated Master of Computer
							Applications from Acropolis Institute of Technology
							and Research, Indore, India. With a strong
							foundation in problem-solving and a collaborative
							mindset, I am passionate about developing
							cutting-edge solutions that blend innovation with
							practicality. I enjoy working in team environments,
							where I can leverage my communication skills and
							technical expertise to contribute meaningfully to
							projects. Whether it&apos;s coding, tackling new
							challenges, or learning the latest technologies,
							I&apos;m always eager to grow and push boundaries.
							Let&apos;s connect and explore possibilities!
						</motion.p>
					</motion.div>
					<motion.div
						className="right"
						initial="hidden"
						animate="show"
						variants={zoomUpAnimation}
					>
						<div className="imageContainer w-fit max-h-fit rounded-full overflow-hidden z-[9999]">
							<motion.img
								variants={zoomUpAnimation}
								src="/assets/images/me.jpeg"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			<motion.section
				className="skills text-white putCenter mb-12 flex-col w-full"
				initial="hidden"
				animate="show"
				variants={fadeInUpAnimation}
			>
				<motion.h1
					variants={fadeInUpAnimation}
					className="text-center text-white/80 text-4xl mb-8 md:text-5xl glow"
				>
					Professional Skillset
				</motion.h1>
				<div className="container mx-[2rem] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:mx-0">
					{programmingIcons.map((d) => {
						return (
							<>
								<motion.div
									variants={fadeInUpAnimation}
									className="programmingIcon putCenter w-full h-[8rem] my-4"
								>
									<div className="text-[6rem] hover:text-[8rem] transition-all text-white/50 hover:text-white">
										{d.icon}
									</div>
								</motion.div>
							</>
						);
					})}
				</div>
			</motion.section>
		</>
	);
}
