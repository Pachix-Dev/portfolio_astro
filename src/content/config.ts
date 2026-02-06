import { defineCollection, z } from "astro:content";

const proyects = defineCollection({
    schema: z.object({
        locale: z.enum(["es", "en"]),
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        repo: z.string().url().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional(),        
        date: z.date().optional(),
        role: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        highlights: z.array(z.string()).optional(),        
    }),
});

const experience = defineCollection({
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        type: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string(),
        responsabilities: z.array(z.string()).optional(),
        achievements: z.array(z.string()).optional(),
        technologies: z.array(z.string()).optional(),
    }),
});

export const collections = { proyects, experience };
