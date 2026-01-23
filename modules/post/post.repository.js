import prisma from "../../config/prisma.js";

export default class PostRepository {
  static async fetchUserPosts(userId) {
    return prisma.post.findMany({
      where: {
        authorId: userId,
      },
    });
  }

  static async findById(id) {
    return prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        content: true,
        authorId: true,
        createdAt: true,
      },
    });
  }

  static async createUserPost(data) {
    return prisma.post.create({
      data,
    });
  }

  static async updateUserPost(id, data) {
    return prisma.post.update({
      where: { id: Number(id) },
      data,
    });
  }

  static async deleteUserPost(id) {
    return prisma.post.delete({
      where: { id: Number(id) },
    });
  }
}
