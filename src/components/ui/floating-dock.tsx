/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";
import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[];
	desktopClassName?: string;
	mobileClassName?: string;
}) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	);
};

const FloatingDockMobile = ({
	items,
	className,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[];
	className?: string;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={cn("relative block sm:hidden", className)}>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId="nav"
						className="absolute top-full mt-2 inset-x-0 flex flex-col gap-2"
					>
						{items.map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
									y: 10,
									transition: {
										delay: idx * 0.05,
									},
								}}
								transition={{
									delay: (items.length - 1 - idx) * 0.05,
								}}
							>
								<Link
									href={item.href}
									key={item.title}
									className="h-10 w-10 rounded-full flex items-center justify-center"
								>
									<div className="h-4 w-max flex items-center">
										{item.icon} <h1 className="ml-2 sm:hidden">{item.title}</h1>
									</div>
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={() => setOpen(!open)}
				className="h-10 w-10 rounded-full flex items-center justify-center"
			>
				<FaAngleDown />
			</button>
		</div>
	);
};

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[];
	className?: string;
}) => {
	const mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				"mx-auto hidden sm:flex h-8 gap-4 items-end  rounded-2xl px-4",
				className
			)}
		>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({
	mouseX,
	title,
	icon,
	href,
}: {
	mouseX: MotionValue;
	title: string;
	icon: React.ReactNode;
	href: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0,
		};

		return val - bounds.x - bounds.width / 2;
	});

	const widthTransform = useTransform(distance, [-150, 0, 150], [20, 55, 35]);
	const heightTransform = useTransform(
		distance,
		[-150, 0, 150],
		[20, 55, 35]
	);

	const widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20]
	);
	const heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[20, 40, 20]
	);

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	const heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<Link href={href}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="aspect-square rounded-full bg-primary/50 dark:bg-neutral-800 flex items-center justify-center relative"
			>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 120, x: "-50%" }}
							animate={{ opacity: 1, y: 100, x: "-50%" }}
							exit={{ opacity: 0, y: 100, x: "-50%" }}
							className="px-1 py-0.5 whitespace-pre rounded bg-primary border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-primary text-foreground absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
						>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className="flex items-center justify-center"
				>
					{icon}
				</motion.div>
			</motion.div>
		</Link>
	);
}
