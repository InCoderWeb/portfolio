// import { FlipWords } from "@/components/ui/flip-words";
// import { heroFlipTexts } from "@/helpers/constants";
"use client";
import { Variants, motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import z from "zod";

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

type ContactFormData = {
	UserName: string;
	email: string;
	subject: string;
	message: string;
};

export default function Contact() {
	const Contact = z.object({
		UserName: z.string().min(2, "Name is required"),
		email: z.string().email("Invalid email"),
		subject: z.string().min(1, "Subject is required"),
		message: z.string().min(1, "Message is required"),
	});
	const [formData, setFormData] = useState({
		UserName: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState<boolean>(false);
	const [isSent, setIsSent] = useState<boolean>(false);
	const [isErr, setIsErr] = useState<boolean>(false);

	const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});

	// Handler to update form data and validate input
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target as {
			name: keyof ContactFormData;
			value: string;
		};
		// Update formData using the dynamic key and the previous state
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Validate the specific field
		try {
			Contact.shape[name].parse(value);
			// Clear error if valid
			setFormErrors((prev) => ({ ...prev, [name]: "" }));
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Set the specific field error message
				setFormErrors((prev) => ({
					...prev,
					[name]: error.errors[0].message,
				}));
			}
		}
	};

	const submitContactForm = () => {
		try {
			// Validate the entire form data
			Contact.parse(formData);
			sentMessage();
		} catch (error) {
			if (error instanceof z.ZodError) {
				const errors: Partial<ContactFormData> = {};
				error.errors.forEach((d) => {
					errors[d.path[0] as keyof ContactFormData] = d.message;
				});
				setFormErrors(errors);
			} else {
				console.error("Unexpected error:", error);
			}
		}
	};

	const sentMessage = () => {
		setLoading(true);

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData), // Send formData as JSON
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status) {
					setLoading(false);
					setFormData({
						UserName: "",
						email: "",
						subject: "",
						message: "",
					});
					setFormErrors({});
					setIsSent(true);
					setTimeout(() => {
						setIsSent(false);
					}, 3000);
				}
			})
			.catch((err) => {
				setIsErr(true);
				setTimeout(() => {
					setIsErr(false);
				}, 3000);
			})
			.finally(() => setLoading(false));
	};

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
								Let&apos;s Talk
							</motion.h1>
							<motion.p
								variants={fadeInUpAnimation}
								className="text-sm text-white/50 mt-4"
							>
								Have some big idea or brand to develop and need
								help? Then reach out we&apos;d love to hear
								about your project and provide help.
							</motion.p>

							<motion.div
								variants={fadeInUpAnimation}
								className="mt-12"
							>
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
								<motion.h2
									variants={fadeInUpAnimation}
									className="text-white/80 text-base font-bold"
								>
									Socials
								</motion.h2>

								<ul className="flex mt-4 space-x-4">
									<motion.li
										variants={fadeInUpAnimation}
										className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
									>
										<a
											target="_blank"
											href="https://www.github.com/incoderweb/"
										>
											<FaGithub className="size-6 text-white" />
										</a>
									</motion.li>
									<motion.li
										variants={fadeInUpAnimation}
										className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
									>
										<a
											target="_blank"
											href="https://www.x.com/incoderweb/"
										>
											<BsTwitterX className="size-5 text-white" />
										</a>
									</motion.li>
									<motion.li
										variants={fadeInUpAnimation}
										className="bg-[#e6e6e6cf]/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
									>
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

						<motion.form
							className="ml-auto space-y-4 w-full"
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="inputWrapper">
								<motion.input
									variants={fadeInUpAnimation}
									type="text"
									placeholder="Name"
									className="contactInput"
									value={formData.UserName}
									name="UserName"
									onChange={(e) => handleChange(e)}
								/>
								{formErrors.UserName && (
									<>
										<div className="errorBox">
											{formErrors.UserName}
										</div>
									</>
								)}
							</div>
							<div className="inputWrapper">
								<motion.input
									variants={fadeInUpAnimation}
									type="email"
									placeholder="Email"
									className="contactInput"
									name="email"
									value={formData.email}
									onChange={(e) => handleChange(e)}
								/>
								{formErrors.email && (
									<>
										<div className="errorBox">
											{formErrors.email}
										</div>
									</>
								)}
							</div>
							<div className="inputWrapper">
								<motion.input
									variants={fadeInUpAnimation}
									type="text"
									placeholder="Subject"
									className="contactInput"
									name="subject"
									value={formData.subject}
									onChange={(e) => handleChange(e)}
								/>
								{formErrors.subject && (
									<>
										<div className="errorBox">
											{formErrors.subject}
										</div>
									</>
								)}
							</div>
							<div className="inputWrapper">
								<motion.textarea
									variants={fadeInUpAnimation}
									placeholder="Enter Your Message"
									rows={6}
									className="contactInput"
									name="message"
									value={formData.message}
									onChange={(e) => handleChange(e)}
								></motion.textarea>
								{formErrors.message && (
									<>
										<div className="errorBox">
											{formErrors.message}
										</div>
									</>
								)}
							</div>
							<motion.button
								variants={fadeInUpAnimation}
								type="button"
								onClick={() => submitContactForm()}
								className={`text-white ${
									loading
										? "bg-blue-900/50 cursor-not-allowed hover:bg-blue-900/50"
										: "bg-blue-500"
								} hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6`}
								disabled={loading}
							>
								{loading ? "Sending..." : "Send"}
							</motion.button>
							{isSent && (
								<div className="text-emerald-600 flex justify-center items-center">
									<IoIosRocket className="mr-1" /> Message
									Sent Successfully
								</div>
							)}
							{isErr && (
								<div className="text-red-600 flex justify-center items-center">
									<BiSolidError className="mr-1" /> Message
									Sent Successfully
								</div>
							)}
						</motion.form>
					</motion.div>
				</div>
			</motion.section>
		</>
	);
}
