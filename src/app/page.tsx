import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
	await new Promise(resolve => setTimeout(resolve, 1000));
	return response.json();
}
	
export default async function Home() {
	const skills = await getSkills();

	return (
		<section className="flex gap-3 flex-wrap">
			{skills.map((skill) => {
				return (
					<Card
						key={skill.id}
						className="w-[20rem] bg-slate-200 border border-slate-300 flex flex-col justify-between"
					>
						<CardHeader className="flex gap-3">
								<Avatar>
									<AvatarImage
										src={`/images/${skill.idCode}.png`}
										alt="skill"
									/>
									<AvatarFallback className="bg-slate-300">
										{skill.name.slice(0, 2).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div>
									<CardTitle className="mb-1">
										{skill.name}
									</CardTitle>
									<CardDescription>
										<a
											href={skill.url}
											target="_blank"
											className="hover:underline"
										>
											Get more information on {skill.name}
										</a>
									</CardDescription>
								</div>
						</CardHeader>
						<CardContent>
							<p className="italic text-[1.1rem] text-blue-800">
								{skill.description}
							</p>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="secondary">
								Mark as interested
							</Button>
							<Badge>{Math.floor(Math.random() * 50)} Jobs</Badge>
						</CardFooter>
					</Card>
				);
			})}
		</section>
	);
}
