import * as PostService from "./post.service.js";

export const createPost = async (request, response, next) => {
  try {
    const userId = request.authenticated.userId;

    const { title, content } = request.body;

    const post = await PostService.createUserPost(userId, { title, content });

    return response.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchPosts = async (request, response, next) => {
  try {
    const userId = request.authenticated.userId;

    const posts = await PostService.fetchUserPosts(userId);

    return response
      .status(200)
      .json({ message: "User Posts Fetched Successfully", posts: posts });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (request, response, next) => {
  try {
    const userId = request.authenticated.userId;
    const postId = request.params.id;

    await PostService.deleteUserPost(postId, userId);

    return response.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (request, response, next) => {
  try {
    const userId = request.authenticated.userId;
    const postId = request.params.id;
    const { title, content } = request.body;

    const post = await PostService.updateUserPost(postId, userId, {
      title,
      content,
    });

    return response.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    next(error);
  }
};
