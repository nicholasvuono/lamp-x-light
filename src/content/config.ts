import { defineCollection, z } from 'astro:content';

const texts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { texts };
