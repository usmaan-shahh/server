import PostRepository from "./post.repository.js"

export const fetchUserPosts = async (userId) => {
    return PostRepository.fetchUserPosts(userId);
}

export const createUserPost = async (userId, { title, content }) => {
    return PostRepository.createUserPost({ title, content, authorId: userId });
}

export const updateUserPost = async (id, data) => {
    return PostRepository.updateUserPost(id, data);
}

export const deleteUserPost = async (id) => {
    return PostRepository.deleteUserPost(id);
}
    