import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<section className="relative px-5 py-20 md:px-10 md:py-24 lg:py-30 flex items-center min-h-screen">
				<div className="wrapper">
					<div className="mb-4">
						<h1 className="text-5xl md:text-7xl xl:text-8xl text-secondary-foreground tracking-[.5rem] md:tracking-[1rem] leading-tight uppercase text-center">
							The Hawkins Co
						</h1>
					</div>
					<div className="absolute bottom-5 right-5 md:relative md:bottom-auto md:right-auto  md:mx-auto flex items-center md:justify-center">
						<Typewriter
							text="coming soon"
							tag="p"
							className=" text-center text-white md:text-xl z-10"
						/>
					</div>
					<div className="absolute inset-0 -z-10">
						<Image
							src="/images/HAWKINS-90.webp"
							alt="Man, woman, and child standing and hugging each other"
							layout="fullWidth"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/25"></div>
					</div>
				</div>
			</section>
		</main>
	);
}
