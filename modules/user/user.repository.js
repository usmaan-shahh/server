import prisma from "../../config/prisma.js";

export default class UserRepository {
  static async findById(id) {
    return prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  }

  static async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
  }

  static async createUser(data) {
    return prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  static async updateById(id, data) {
    return prisma.user.update({
      where: { id: Number(id) },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  }

  static async deleteById(id) {
    return prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
