import { FaAddressCard, FaBookmark, FaCircleUser, FaHouse, FaLaptopCode } from "react-icons/fa6";

export const navbarLinks = [
    {
        title: "Home",
        href: "/",
        icon: <FaHouse/>
    },
    {
        title: "About",
        href: "/about",
        icon: <FaCircleUser />
    },
    {
        title: "Projects",
        href: "/projects",
        icon: <FaLaptopCode />
    },
    {
        title: "Contact",
        href: "/contact",
        icon: <FaAddressCard />
    },
    {
        title: "Blog",
        href: "/blog",
        icon: <FaBookmark />
    },
]

export const heroFlipTexts = ["Web Developer", "Coder", "Blogger", "Youtuber"]