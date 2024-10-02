// import { FlipWords } from "@/components/ui/flip-words";
// import { heroFlipTexts } from "@/helpers/constants";
"use client";
import Card from "@/components/custom/card";
import { HiLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projectsData } from "@/helpers/constants";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Projects() {
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
			<section className="projects pb-[2rem] md:pb-0 mx-[2rem] md:mx-0">
				<div className="container grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[8rem] mb-[6rem]">
					{projectsData.map((d) => {
						return (
							<>
								<Modal>
									<ModalTrigger>
										<Card
											title={d.title}
											desc={d.description}
											url={d.url}
										/>
									</ModalTrigger>
									<ModalBody>
										<ModalContent>
											<div className="cursor-pointer p-2">
												<img
													className="w-full object-cover rounded-xl"
													src={d.url}
													alt={d.title}
												/>
												<div className="p-2">
													<h2 className="font-bold text-lg mb-2 text-white/80">
														{d.title}
													</h2>
													<p className="text-sm text-white/60">
														{d.description}
													</p>
												</div>
											</div>
										</ModalContent>
										<ModalFooter>
											<div className="flex justify-center items-center">
												<Link
													href={d.previewUrl}
													target="_blank"
													className="mr-2"
												>
													<Button>
														<HiLink className="text-lg mr-1" />{" "}
														Live Preview
													</Button>
												</Link>
												<Link
													href={d.githubUrl}
													target="_blank"
												>
													<Button>
														<FaGithub className="text-lg mr-1" />
														Github
													</Button>
												</Link>
											</div>
										</ModalFooter>
									</ModalBody>
								</Modal>
							</>
						);
					})}
				</div>
			</section>
		</>
	);
}
