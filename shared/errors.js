export class EmailAlreadyExistsError extends Error {
  constructor() {
    super("Email already exists. Try with a different email.");
    this.name = "EmailAlreadyExistsError";
    this.statusCode = 409;
  }
}

export class EmailNotFoundError extends Error {
  constructor() {
    super("Email not found. Please register first.");
    this.name = "EmailNotFoundError";
    this.statusCode = 404;
  }
}

export class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials. Please try again.");
    this.name = "InvalidCredentialsError";
    this.statusCode = 401;
  }
}

export class CookieNotFoundError extends Error {
  constructor() {
    super("No authentication cookie found. User already logged out.");
    this.name = "CookieNotFoundError";
    this.statusCode = 401;
  }
}

// User Errors
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
