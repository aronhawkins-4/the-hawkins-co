/** biome-ignore-all lint/correctness/noChildrenProp: <explanation> */
import { useForm } from "@tanstack/react-form";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
});

export function ContactForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validators: {
			onSubmit: contactFormSchema,
		},
		onSubmit: async ({ value }) => {
			console.log("Form submitted:", value);
			// Handle form submission here
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
			className="w-full max-w-md space-y-6"
		>
			<form.Field
				name="name"
				children={(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name}>Name</Label>
						<Input
							id={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Your name"
						/>
						{field.state.meta.errors.length > 0 && (
							<p className="text-sm text-red-500">
								{field.state.meta.errors[0]?.message}
							</p>
						)}
					</div>
				)}
			/>

			<form.Field
				name="email"
				children={(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name}>Email</Label>
						<Input
							id={field.name}
							type="email"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="your@email.com"
						/>
						{field.state.meta.errors.length > 0 && (
							<p className="text-sm text-red-500">
								{field.state.meta.errors[0]?.message}
							</p>
						)}
					</div>
				)}
			/>

			<form.Field
				name="subject"
				children={(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name}>Subject</Label>
						<Input
							id={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Message subject"
						/>
						{field.state.meta.errors.length > 0 && (
							<p className="text-sm text-red-500">
								{field.state.meta.errors[0]?.message}
							</p>
						)}
					</div>
				)}
			/>

			<form.Field
				name="message"
				children={(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name}>Message</Label>
						<Textarea
							id={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							placeholder="Your message"
							rows={5}
						/>
						{field.state.meta.errors.length > 0 && (
							<p className="text-sm text-red-500">
								{field.state.meta.errors[0]?.message}
							</p>
						)}
					</div>
				)}
			/>

			<Button type="submit" className="w-full">
				Send Message
			</Button>
		</form>
	);
}
