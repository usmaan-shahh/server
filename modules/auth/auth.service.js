import UserRepository from "../user/user.repository.js";
import bcrypt from 'bcryptjs';
import generateTokens from "../../shared/generateTokens.js";
import { CookieNotFoundError, EmailAlreadyExistsError, EmailNotFoundError, InvalidCredentialsError } from "./auth.error.js";


export const registerUser = async ({ name, email, password }) => {

    const alreadyExists = await UserRepository.findByEmail(email);

    if (alreadyExists) throw new EmailAlreadyExistsError();

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserRepository.createUser({ name, email, password: hashedPassword });

}

export const loginUser = async ({ email, password }) => {


    const foundUser = await UserRepository.findByEmail(email);

    if (!foundUser) throw new EmailNotFoundError();

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) throw new InvalidCredentialsError();

    return generateTokens(foundUser);

}

export const logoutUser = async (incommingCookie) => {

    if (!incommingCookie?.cookie) throw new CookieNotFoundError()

    return true;


}