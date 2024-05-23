import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skill, SkillSchema } from "@/types";

async function getSkills(): Promise<Skill[]> {
	const response = await fetch("http://localhost:4557/skills");
	return response.json();
}

export default async function Home() {
	const skills = await getSkills();

	return (
		<section className="flex gap-3 flex-wrap">
			{skills.map((skill) => {
				return (
					<Card key={skill.id} className="w-[20rem] bg-slate-200 border border-slate-300">
						<CardHeader>
							<div>
								<CardTitle className="mb-1">{skill.name}</CardTitle>
								<CardDescription><a href={skill.url} target="_blank" className="hover:underline">Get more information on {skill.name}</a></CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<p className="italic text-[1.1rem] text-blue-800">{skill.description}</p>
						</CardContent>
					</Card>
				);
			})}
		</section>
	);
}
