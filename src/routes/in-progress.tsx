import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ContactForm } from "@/components/ContactForm";
import Folder from "@/components/Folder";
import { Typewriter } from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MotionHandDrawnArrow } from "@/motion-icons/motion_hand-drawn-arrow";

export const Route = createFileRoute("/in-progress")({ component: App });

const founders = [
	{
		name: "Aron",
		title: "Tech Director",
		description:
			"description of what that means all things websites, software, apps + tech.",
		image: "/images/HAWKINS-41.webp",
	},
	{
		name: "AnnaKate",
		title: "Creative Director",
		description:
			"description of what that means all things design, branding, art direction + creative strategy.",
		image: "/images/HAWKINS-251.webp",
	},
	{
		name: "Jane",
		title: "Head of Spontaneity",
		description:
			"description of what that means all things design, branding, art direction + creative strategy.",
		image: "/images/HAWKINS-135.webp",
	},
	{
		name: "Moo",
		title: "Chief Vibes Officer",
		description:
			"description of what that means all things design, branding, art direction + creative strategy.",
		image: "/images/HAWKINS-102.webp",
	},
];

function App() {
	return (
		<main>
			<section className="relative px-5 py-20 md:px-10 md:py-24 lg:py-30 min-h-144 flex items-center">
				<div className="wrapper">
					<div className="relative z-10">
						<h1 className="text-5xl md:text-7xl xl:text-8xl text-secondary-foreground tracking-[.5rem] md:tracking-[1rem] leading-tight uppercase text-center">
							The Hawkins Co
						</h1>
						{/* <p className="text-center text-white md:text-xl">
							Software development + consulting
						</p> */}
					</div>
					<div className="absolute inset-0">
						<Image
							src="/images/HAWKINS-90.webp"
							alt="Description of image"
							layout="fullWidth"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/25"></div>
					</div>
				</div>
			</section>
			<section className="px-5 py-10 md:px-10 md:py-16 lg:py-20 bg-background">
				<div className="wrapper">
					<div className="grid grid-cols-10 lg:grid-rows-3 gap-5">
						<div className="col-span-full lg:col-span-6 row-span-1 col-start-1 row-start-1 lg:self-end">
							<Typewriter
								text="Howdy"
								className="text-5xl uppercase tracking-[.5rem] leading-tight mb-5"
							/>
						</div>

						<div className="col-span-full row-span-1 lg:col-span-3 lg:row-span-2 col-start-1 row-start-2">
							<p>
								Hi, we’re Aron, AnnaKate & Jane (3yo) Hawkins. We live in Waco,
								Texas and spend our days out in the sunshine, drinking a cozy
								drink & cuddling our cat Moo.
							</p>
						</div>
						<div className="relative  col-span-5 col-start-6 row-start-3 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-2">
							<Image
								src="/images/HAWKINS-147.webp"
								alt="Description of image"
								layout="fullWidth"
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="relative aspect-square col-span-5 row-span-2 col-start-1 row-start-3 lg:aspect-auto lg:col-span-4 lg:row-span-full lg:col-start-7 lg:row-start-1">
							<Image
								src="/images/HAWKINS-206.webp"
								alt="Description of image"
								layout="fullWidth"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 md:py-16 lg:py-20 bg-background overflow-hidden">
				<div className="px-5 md:px-10">
					<div className="wrapper">
						<Typewriter
							text="Meet The Founders"
							className="text-5xl uppercase tracking-[.5rem] leading-tight mb-16"
						/>
					</div>
				</div>
				<Carousel className="px-5 md:px-10 [&>div]:overflow-visible">
					<CarouselContent className="-ml-8">
						{founders.map((founder) => (
							<CarouselItem
								key={founder.name}
								className="basis-full md:basis-1/3 pl-8"
							>
								<div className="p-4 bg-white mb-6 shadow-lg">
									<Image
										src={founder.image}
										alt={`Founder ${founder.name}`}
										layout="fullWidth"
										className="aspect-square object-cover mb-4"
									/>
									<h3 className="font-satisfy text-2xl tracking-[.5rem] uppercase text-center">
										{founder.name}
									</h3>
								</div>
								<h4 className="text-base tracking-[.25rem] mb-2">
									{founder.title}
								</h4>
								<p>{founder.description}</p>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
			<section className="px-5 py-10 md:px-10 h-196 relative">
				<Image
					src="/images/HAWKINS-112.webp"
					alt="Description of image"
					layout="fullWidth"
					className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
				/>
				<div className="absolute top-24 left-10 md:left-auto md:right-10 lg:right-24 z-10">
					<Typewriter
						text="Our Why"
						tag="span"
						className="text-5xl tracking-[.5rem] md:text-7xl md:tracking-[1rem] uppercase text-primary-foreground block mb-6"
					/>
					{/* <h2 className="text-5xl tracking-[.5rem] md:text-7xl md:tracking-[1rem] uppercase text-primary-foreground block mb-6">Our Why</h2> */}
					<MotionHandDrawnArrow className="mr-auto ml-0 sm:ml-8 md:ml-auto md:mr-16 -scale-x-100 md:scale-x-100" />
				</div>
				<div className="absolute inset-0 bg-black/50 md:bg-black/25"></div>
			</section>
			<section className="relative px-5 py-20 md:px-10 md:py-24 lg:py-30 min-h-144 flex items-center">
				<div className="wrapper">
					<p className="text-center mb-16 text-pretty">
						Choosing the unconventional route—because dancing to a vinyl and
						jumping on the trampoline as a family on a random Tuesday afternoon
						matters more to us than the traditional 9–5. We believe our work is
						an extension of our capacity, and our capacity is shaped by the way
						we live. Togetherness as a family fuels what we create. So we move
						slowly, intentionally, and with curiosity—building this business as
						we go.
					</p>
					<div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-[repeat(3,1fr)] justify-center justify-items-center">
						<Image
							src="/images/HAWKINS-102.webp"
							alt="Description of image"
							layout="fullWidth"
							className="w-full aspect-square object-cover"
						/>
						<Image
							src="/images/HAWKINS-20_22_23.gif"
							alt="Description of image"
							layout="fullWidth"
							className="w-full aspect-square object-cover"
						/>
						<Image
							src="/images/HAWKINS-135.webp"
							alt="Description of image"
							layout="fullWidth"
							className="w-full aspect-square object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="relative px-5 pb-20 md:px-10 md:pb-24 lg:pb-30 min-h-144 flex items-center">
				<div className="wrapper">
					<Typewriter
						text="Our Work"
						className="text-5xl uppercase tracking-[.5rem] leading-tight text-center mb-16"
					/>
					<div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center justify-items-center max-w-fit mx-auto mb-20">
						{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
							<Folder
								key={i}
								color="#343133"
								className="custom-folder"
								size={1}
							/>
						))}
					</div>
					<p className="text-center">
						p.s. if your project is something new or different from what you see
						here, we love learning new things{" "}
						<span className="text-2xl ml-6">👀</span>
					</p>
				</div>
			</section>
			<section className="flex flex-col-reverse md:flex-row">
				<div className="basis-full md:basis-1/3 px-5 md:px-10 xl:px-20 py-10 lg:py-20 xl:py-30">
					<div className="h-full max-w-2xl mx-auto flex flex-col justify-between">
						<Typewriter
							text="Talk Soon"
							className="text-5xl uppercase tracking-[.5rem] leading-tight mb-6"
						/>
						<div>
							<p className="mb-10">
								<strong className="uppercase tracking-wider inline-block mb-2">
									Email:
								</strong>{" "}
								<br />
								<a href="mailto:howdy@thehawkins.co">howdy@thehawkins.co</a>
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button className="w-full xs:w-auto">Connect With Us</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogTitle>Connect With Us</DialogTitle>
									<ContactForm />
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
				<div className="basis-full md:basis-2/3">
					<Image
						src="/images/HAWKINS-251.webp"
						alt="Description of image"
						layout="fullWidth"
						className="w-full aspect-square object-cover"
					/>
				</div>
			</section>
		</main>
	)
}
