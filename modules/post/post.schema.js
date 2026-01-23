import z from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must not exceed 200 characters")
    .trim(),

  content: z
    .string()
    .max(10000, "Content must not exceed 10000 characters")
    .optional(),
});

export const updatePostSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(200, "Title must not exceed 200 characters")
      .trim()
      .optional(),

    content: z
      .string()
      .max(10000, "Content must not exceed 10000 characters")
      .optional(),
  })
  .refine((data) => data.title !== undefined || data.content !== undefined, {
    message:
      "At least one field (title or content) must be provided for update",
  });
