import { z } from 'zod';

export const SkillSchema = z.object({
	id: z.number(),
	idCode: z.string(),
	name: z.string(),
	url: z.string().url(),
	description: z.string()
});

export type Skill = z.infer<typeof SkillSchema>;
