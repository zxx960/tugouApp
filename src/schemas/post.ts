import { type CollectionEntry, z } from "astro:content";

// From astro v5, the original `slug` is now `id`
// I use `slug` as a pure slug, which is the part after the first `/`
// the part before the first `/` is the language
export type Slug = string;

export const PostFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()),
  categories: z.array(z.string()).optional(),
  abbrlink: z.string().optional(),
  date: z.date(),
  updated: z.date().optional(),
  license: z.string().optional(),
  licenseLink: z.string().optional(),
  ogImageUrl: z.string().optional(),
});

export const PostSnapshotSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  slug: z.string(),
  href: z.string(),
  date: z.string(),
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;
export type PostSnapshot = z.infer<typeof PostSnapshotSchema>;
export type Post = CollectionEntry<"posts">;
