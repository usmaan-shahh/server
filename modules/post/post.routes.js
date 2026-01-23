import verifyJWT from "../../middlewares/verifyJWT.js";
import * as postController from "../post/post.controller.js";
import express from "express";
import { createPostSchema, updatePostSchema } from "./post.schema.js";
import { validator } from "../../middlewares/validator.js";

const router = express.Router();

// Create a new post
router.post(
  "/posts",
  validator(createPostSchema),
  verifyJWT,
  postController.createPost,
);

// Get all posts
router.get("/posts", verifyJWT, postController.fetchPosts);

// Update a post
router.put(
  "/posts",
  validator(updatePostSchema),
  verifyJWT,
  postController.updatePost,
);

// Delete a post
router.delete("/posts", verifyJWT, postController.deletePost);

export default router;
