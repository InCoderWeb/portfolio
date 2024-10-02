import {
	FaAddressCard,
	// FaBookmark,
	FaCircleUser,
	FaHouse,
	FaLaptopCode,
} from "react-icons/fa6";

import { RiJavascriptFill, RiReactjsLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiPhp, SiMongodb } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from "react-icons/fa6";

export const programmingIcons = [
	{
		name: "HTML",
		icon: <FaHtml5 />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt />,
	},
	{
		name: "Javascript",
		icon: <RiJavascriptFill />,
	},
	{
		name: "React JS",
		icon: <RiReactjsLine />,
	},
	{
		name: "Next JS",
		icon: <RiNextjsFill />,
	},
	{
		name: "Tailwind CSS",
		icon: <RiTailwindCssFill />,
	},
	{
		name: "PHP",
		icon: <SiPhp />,
	},
	{
		name: "Node JS",
		icon: <DiNodejs />,
	},
	{
		name: "Python",
		icon: <FaPython />,
	},
	{
		name: "Mongo DB",
		icon: <SiMongodb />,
	},
	{
		name: "Git",
		icon: <FaGitAlt />,
	},
]

export const navbarLinks = [
	{
		title: "Home",
		href: "/",
		icon: <FaHouse />,
	},
	{
		title: "About",
		href: "/about",
		icon: <FaCircleUser />,
	},
	{
		title: "Projects",
		href: "/projects",
		icon: <FaLaptopCode />,
	},
	{
		title: "Contact",
		href: "/contact",
		icon: <FaAddressCard />,
	},
	// {
	// 	title: "Blog",
	// 	href: "/blog",
	// 	icon: <FaBookmark />,
	// },
];

export const heroFlipTexts = ["Web Developer", "Coder", "Blogger", "Youtuber"];

type projectsData = {
	title: string;
	description: string;
	url: string;
	githubUrl: string;
	previewUrl: string
};
export const projectsData: projectsData[] = [
	{
		title: "Social Media Template",
		description:
			"InSocial is a clean and intuitive social media dashboard designed to enhance user interaction and engagement. It features a sleek user interface, allowing users to explore, post, and manage their social interactions seamlessly.",
		url: "/assets/images/project1.png",
		githubUrl: "https://github.com/InCoderWeb/social-media-template", 
		previewUrl: "https://social-media-incoderweb.vercel.app/",
	},
	{
		title: "Personal Portfolio",
		description:
			"This portfolio website serves as a digital resume and showcase platform for a professional web developer. It is designed to provide a modern, clean, and interactive experience for visitors, allowing them to explore the developer's skills, projects, and contact details.",
		url: "/assets/images/project2.png",
		githubUrl: "https://github.com/InCoderWeb/personal-portfolio-template", 
		previewUrl: "https://personal-portfolio-template-mu.vercel.app/",
	},
	{
		title: "Responsive FAQ Accordion",
		description:
			"A clean and interactive accordion component with multiple sections, designed to display content in a compact, expandable format. The first section is expanded, showing some placeholder text, while the other sections remain collapsed. Users can toggle between sections to reveal or hide content. The overall design features a modern, minimalistic style with a green background, giving it a fresh and user-friendly appearance, ideal for presenting categorized or hidden information on websites.",
		url: "/assets/images/project3.png",
		githubUrl: "https://github.com/InCoderWeb/Responsive-FAQ-Accordion-Design---InCoder", 
		previewUrl: "https://incoderweb.github.io/Responsive-FAQ-Accordion-Design---InCoder/",
	},
	{
		title: "Random Password Generator",
		description:
			"This project offers a secure and customizable random password generator script designed to create strong, complex passwords. Users can adjust settings like password length and character types (upper/lowercase letters, numbers, symbols), ensuring flexibility while maintaining best security practices for protecting sensitive data and accounts.",
		url: "/assets/images/project4.png",
		githubUrl: "https://github.com/InCoderWeb/Random-Password-Generator-InCoder", 
		previewUrl: "https://incoderweb.github.io/Random-Password-Generator-InCoder/",
	},
	{
		title: "Sign Up & Sign In Form with Validation",
		description:
			"Learn how to create a sleek and functional form with built-in validation for seamless user interaction. A must for web developers!",
		url: "/assets/images/project5.jpg",
		githubUrl: "https://github.com/InCoderWeb/form-with-validation", 
		previewUrl: "https://form-sigma-black.vercel.app/signup",
	},
	{
		title: "404 Page",
		description:
			"The 404 Error Page Project is a sleek, modern design that offers a user-friendly way to notify visitors when they encounter a broken or non-existent link. The page is fully responsive, featuring a clean layout with a creative message, helpful navigation options, and a search bar to guide users back to the main sections of the site. This project emphasizes smooth animations and minimalistic design elements, making it both functional and visually appealing for a seamless user experience.",
		url: "/assets/images/project6.png",
		githubUrl: "https://github.com/InCoderWeb/404-page", 
		previewUrl: "https://incoderweb.github.io/404-page/",
	},
	{
		title: "Contact Page",
		description:
			"The Contact Page Project is a well-structured and responsive layout designed to facilitate easy communication between users and website administrators. It includes a clean form with fields for name, email, subject, and message, ensuring a simple yet effective way for visitors to get in touch. The page also features integrated social media icons, a map for physical location display, and a submit button with form validation to enhance user interaction. The overall design is modern, minimal, and focused on accessibility and user experience.",
		url: "/assets/images/project7.png",
		githubUrl: "https://github.com/InCoderWeb/contact-page", 
		previewUrl: "https://incoderweb.github.io/contact-page/",
	},
	{
		title: "AI Quiz Game",
		description:
			"The AI Quiz Game Project is an interactive and engaging quiz platform powered by artificial intelligence. This game dynamically generates questions from a vast pool of topics, including general knowledge, technology, and science. The AI enhances the experience by adapting the difficulty level based on user performance, offering personalized quizzes that challenge players progressively. With a sleek user interface, real-time scoring, and the ability to provide hints or explanations for answers, the game is designed to be both educational and entertaining, ideal for users looking to test and improve their knowledge.",
		url: "/assets/images/project8.png",
		githubUrl: "https://github.com/InCoderWeb/AI-quiz", 
		previewUrl: "https://quiz-app-incoderweb.vercel.app/",
	},
];