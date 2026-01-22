import UserRepository from "./user.repository.js"
import bcrypt from 'bcryptjs';
import { UserNotFoundError, InvalidPasswordError, SamePasswordError } from "./user.error.js";
import { EmailAlreadyExistsError } from "../auth/auth.error.js";


export const fetchUserProfile = async (id) => {
  return UserRepository.findById(id);
}

export const updateUserProfile = async (id, email) => {

  if (email) {

    const existingUser = await UserRepository.findByEmail(email);


    if (existingUser && existingUser._id.toString() !== id) {
      throw new EmailAlreadyExistsError();
    }

  }

  const updatedUser = await UserRepository.updateById(id, { email });

  if (!updatedUser) throw new UserNotFoundError();

  return updatedUser;
}

export const deleteUserAccount = async (id) => {

  const deletedUser = await UserRepository.deleteById(id);

  if (!deletedUser) {
    throw new UserNotFoundError();
  }

  return deletedUser;
}

export const updatePassword = async (id, currentPassword, newPassword) => {

  const user = await UserRepository.findById(id);

  if (!user) {
    throw new UserNotFoundError();
  }

  const userWithPassword = await UserRepository.findByEmail(user.email);

  const isPasswordValid = await bcrypt.compare(currentPassword, userWithPassword.password);

  if (!isPasswordValid) {
    throw new InvalidPasswordError();
  }

  const isSamePassword = await bcrypt.compare(newPassword, userWithPassword.password);

  if (isSamePassword) {
    throw new SamePasswordError();
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const updatedUser = await UserRepository.updateById(id, { password: hashedPassword });

  return updatedUser;
}

