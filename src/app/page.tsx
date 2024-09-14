import { FlipWords } from "@/components/ui/flip-words";
import { heroFlipTexts } from "@/helpers/constants";

import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="container">
					<div className="left">
						<p className="text-lg text-white/90">Hi 👋, my name is</p>
						<h1 className="text-[3rem] md:text-[3.5rem] playpen-sans-regular">Ashutosh Kumar</h1>
						<h1 className="text-[1.5rem] text-white/90 tracking-wider">I&apos;m a<FlipWords words={heroFlipTexts} duration={2000} className="text-white" /></h1>
						<p className="mt-1 w-[25rem] text-white/50 tracking-wide">An enthusiastic programmer, tech enthusiast, and creative problem solver passionate about building innovative solutions and mastering the latest technologies.</p>
					</div>
					<div className="right">
						<BackgroundLines>
							<img src={"/assets/images/hero.png"} />
						</BackgroundLines>
					</div>
				</div>
			</section>
		</>
	);
}
