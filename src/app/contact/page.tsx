// import { FlipWords } from "@/components/ui/flip-words";
// import { heroFlipTexts } from "@/helpers/constants";
"use client";
import { Variants, motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
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

export default function Contact() {
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
			<motion.section className="contact pb-[2rem] md:pb-0 mx-[2rem] md:mx-0">
				<div className="container">
					<motion.div
						initial="hidden"
						animate="show"
						variants={fadeInUpAnimation}
						className="z-[99999999] grid sm:grid-cols-2 items-start gap-16 p-12 mx-auto max-w-4xl bg-white/10 rounded-2xl font-[sans-serif]"
					>
						<div>
							<motion.h1
								variants={fadeInUpAnimation}
								className="text-white text-3xl font-extrabold"
							>
								Let's Talk
							</motion.h1>
							<motion.p
								variants={fadeInUpAnimation}
								className="text-sm text-white/50 mt-4"
							>
								Have some big idea or brand to develop and need
								help? Then reach out we'd love to hear about
								your project and provide help.
							</motion.p>

							<motion.div variants={fadeInUpAnimation} className="mt-12">
								<h2 className="text-white/80 text-base font-bold">
									Email
								</h2>
								<ul className="mt-4">
									<li className="flex items-center">
										<div className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
											<IoMail className="size-6 text-white" />
										</div>
										<a
											href="mailto:ashutoshtiwary2021@gmail.com"
											className="text-[#007bff] text-sm ml-4"
										>
											<small className="block text-white/30">
												Mail
											</small>
											<strong className="text-white/60 hover:text-white/80">
												ashutoshtiwary2021@gmail.com
											</strong>
										</a>
									</li>
								</ul>
							</motion.div>

							<div className="mt-12">
								<motion.h2 variants={fadeInUpAnimation} className="text-white/80 text-base font-bold">
									Socials
								</motion.h2>

								<ul className="flex mt-4 space-x-4">
									<motion.li variants={fadeInUpAnimation} className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
										<a
											target="_blank"
											href="javascript:void(0)"
										>
											<FaGithub className="size-6 text-white" />
										</a>
									</motion.li>
									<motion.li variants={fadeInUpAnimation} className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
										<a
											target="_blank"
											href="https://www.linkedin.com/in/incoderweb/"
										>
											<BsTwitterX className="size-5 text-white" />
										</a>
									</motion.li>
									<motion.li variants={fadeInUpAnimation} className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
										<a
											target="_blank"
											href="https://instagram.com/incoderweb"
										>
											<FaInstagram className="size-6 text-white" />
										</a>
									</motion.li>
								</ul>
							</div>
						</div>

						<form className="ml-auto space-y-4">
							<motion.input variants={fadeInUpAnimation}
								type="text"
								placeholder="Name"
								className="contactInput"
							/>
							<motion.input variants={fadeInUpAnimation}
								type="email"
								placeholder="Email"
								className="contactInput"
							/>
							<motion.input variants={fadeInUpAnimation}
								type="text"
								placeholder="Subject"
								className="contactInput"
							/>
							<motion.textarea variants={fadeInUpAnimation}
								placeholder="Enter Your Message"
								rows={6}
								className="contactInput"
							></motion.textarea>
							<motion.button variants={fadeInUpAnimation}
								type="button"
								className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
							>
								Send
							</motion.button>
						</form>
					</motion.div>
				</div>
			</motion.section>
		</>
	);
}
