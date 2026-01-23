import PostRepository from "./post.repository.js";
import {
  PostNotFoundError,
  UnauthorizedPostAccessError,
} from "../../shared/errors.js";

export const fetchUserPosts = async (userId) => {
  return PostRepository.fetchUserPosts(userId);
};

export const createUserPost = async (userId, { title, content }) => {
  return PostRepository.createUserPost({ title, content, authorId: userId });
};

export const updateUserPost = async (postId, userId, data) => {
  const post = await PostRepository.findById(postId);

  if (!post) throw new PostNotFoundError();

  if (post.authorId !== Number(userId)) throw new UnauthorizedPostAccessError();

  return PostRepository.updateUserPost(postId, data);
};

export const deleteUserPost = async (postId, userId) => {
  const post = await PostRepository.findById(postId);

  if (!post) throw new PostNotFoundError();

  if (post.authorId !== Number(userId)) throw new UnauthorizedPostAccessError();

  return PostRepository.deleteUserPost(postId);
};
