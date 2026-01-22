import * as UserService from "./user.service.js"

export const fetchProfile = async (request, response, next) => {

  try {

    const userId = request.authenticated.userId;
    const result = await UserService.fetchUserProfile(userId)

    return response
      .status(200)
      .json({ message: "User Details Fetched Successfully", details: result });

  } catch (error) {

    next(error)

  }

}

export const updateProfile = async (request, response, next) => {

  try {

    const userId = request.authenticated.userId;

    const { email } = request.body;

    const result = await UserService.updateUserProfile(userId, email);

    return response
      .status(200)
      .json({ message: "Profile updated successfully", details: result });

  } catch (error) {

    next(error);

  }

}

export const deleteAccount = async (request, response, next) => {

  try {

    const userId = request.authenticated.userId;

    await UserService.deleteUserAccount(userId);

    response.clearCookie("cookie", { httpOnly: true, sameSite: "lax", secure: false });

    return response
      .status(200)
      .json({ message: "Account deleted successfully" });

  } catch (error) {

    next(error);

  }

}

export const changePassword = async (request, response, next) => {

  try {

    const userId = request.authenticated.userId;

    const { currentPassword, newPassword } = request.body;

    await UserService.updatePassword(userId, currentPassword, newPassword);

    return response
      .status(200)
      .json({ message: "Password changed successfully" });

  } catch (error) {

    next(error);

  }

}

