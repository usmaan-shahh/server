import { cookieOptions } from "../../config/cookieOptions.js";
import * as AuthService from "./auth.service.js";

export const register = async (request, response, next) => {
  try {
    await AuthService.registerUser(request.body);

    return response
      .status(201)
      .json({ message: "Registration successful. Please login to continue." });
  } catch (err) {
    next(err);
  }
};

export const login = async (request, response, next) => {
  try {
    const result = await AuthService.loginUser(request.body);

    response.cookie("cookie", result.accessToken, cookieOptions);

    return response
      .status(200)
      .json({
        message: "Login successful. Welcome back!",
        accessToken: result.accessToken,
      });
  } catch (err) {
    next(err);
  }
};

export const logout = async (request, response, next) => {
  try {
    const incommingCookie = request.cookies;

    await AuthService.logoutUser(incommingCookie);

    response.clearCookie("cookie", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return response.json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
