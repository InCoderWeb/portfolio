// import { FlipWords } from "@/components/ui/flip-words";
// import { heroFlipTexts } from "@/helpers/constants";
"use client";

import { Variants, motion } from "framer-motion";

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
	return (
		<>
			<section className="about pb-[2rem] md:pb-0 mx-[2rem] md:mx-0">
				<div className="container">
					<motion.div
						className="left mt-[4rem] md:mt-0"
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
						<motion.p variants={fadeInUpAnimation} className="mt-2 mx-[2rem] md:mx-0 tracking-widest text-white/60 max-w-[40rem] text-[0.9rem]">
							Hello, I&apos;m Ashutosh Kumar, currently pursuing an Integrated Master of Computer Applications from Acropolis Institute of Technology and Research, Indore, India. With a strong foundation in				problem-solving and a collaborative mindset, I am passionate about developing cutting-edge solutions 		that blend innovation with practicality. I enjoy working in team environments, where I can leverage
							my communication skills and technical expertise to contribute meaningfully to projects. Whether it&apos;s
							coding, tackling new challenges, or learning the latest technologies, I&apos;m always eager to grow and
							push boundaries. Let&apos;s connect and explore possibilities!
						</motion.p>
					</motion.div>
					<motion.div className="right" initial="hidden"
						animate="show"
						variants={zoomUpAnimation}>
						<div className="imageContainer w-fit max-h-fit rounded-full overflow-hidden z-[9999]">
							<motion.img variants={zoomUpAnimation} src="/assets/images/me.jpeg" />
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}
