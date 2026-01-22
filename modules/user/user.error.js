export class UserNotFoundError extends Error {

  constructor() {
    super("User not found.");
    this.name = "UserNotFoundError";
    this.statusCode = 404;
  }

}

export class InvalidPasswordError extends Error {

  constructor() {
    super("Current password is incorrect.");
    this.name = "InvalidPasswordError";
    this.statusCode = 401;
  }

}

export class SamePasswordError extends Error {

  constructor() {
    super("New password cannot be the same as the current password.");
    this.name = "SamePasswordError";
    this.statusCode = 400;
  }

}

