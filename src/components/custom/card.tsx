import React from "react";
import { Variants, motion } from "framer-motion";

const fadeInUpAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: 75,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.3,
			duration: 1,
		},
	},
};

interface CardProps {
	title: string;
	desc: string;
	url: string;
}

const Card = ({ title, desc, url }: CardProps) => {
	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={fadeInUpAnimation}
			className="w-60 mb-8 z-[9] max-h-[25rem] min-h-[20rem] overflow-hidden cursor-pointer p-2 bg-white/10 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
		>
			<img className="h-40 object-cover rounded-xl" src={url} alt="" />
			<div className="p-2">
				<h2 className="font-bold text-lg mb-2 text-white/80">
					{title}
				</h2>
				<p className="text-sm text-white/40 line-clamp-6">{desc}</p>
			</div>
		</motion.div>
	);
};

export default Card;
