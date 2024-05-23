import { Skill, SkillSchema } from "@/types";

async function getSkills(): Promise<Skill[]> {
	const response = await fetch('http://localhost:4557/skills');
	return response.json();
}

export default async function Home() {
	const skills = await getSkills();
	
	return (
		<section className="flex gap-3 flex-wrap">
			{skills.map(skill => {
				return (
					<div className="bg-slate-500 mb-3 w-[20rem] pt-3 pb-4 px-4 rounded" key={skill.id}>
						<p className="font-semibold">{skill.name}</p>
						<p className="italic">{skill.description}</p>
					</div>
				)
			})}
		</section>
	)
}
