/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { motion } from "motion/react";
import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

export const sentenceVariants = {
	hidden: {},
	// change staggerChildren variable to speed up or slow down typing.
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const letterVariants = {
	hidden: { opacity: 0, display: "none" },
	visible: {
		opacity: 1,
		display: "inline",
		transition: { opacity: { duration: 0 } },
	},
};

export const Typewriter = ({
	text,
	tag = "h2",
	...props
}: {
	text: string;
	tag?: keyof JSX.IntrinsicElements;
	[key: string]: any;
}) => {
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const [isTyping, setIsTyping] = useState(false);

	const MotionComponent = motion.create(tag);
	return (
		<MotionComponent
			key={text}
			variants={sentenceVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			onAnimationStart={() => {
				setIsTypingComplete(false);
				setIsTyping(true);
			}}
			onAnimationComplete={() => {
				setIsTypingComplete(true);
				setIsTyping(false);
			}}
			{...props}
		>
			{text.split("").map((char, i) => (
				<motion.span key={`${char}-${i}`} variants={letterVariants}>
					{char}
				</motion.span>
			))}
			<motion.span
				aria-hidden="true"
				animate={{ opacity: isTyping ? 1 : isTypingComplete ? 0 : [0, 1, 0] }}
				transition={
					isTypingComplete || isTyping
						? { duration: 0 }
						: {
								duration: 1,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}
				}
				style={{ display: "inline-block", width: "1px" }}
			>
				|
			</motion.span>
		</MotionComponent>
	);
};
