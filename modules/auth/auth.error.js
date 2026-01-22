
export class EmailAlreadyExistsError extends Error {

  constructor() {
    super("Email already exists. Try with a different email."); //super() calls the parent class constructor (Error), which sets this.message
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
    this.name = "CookieNotFound";
    this.statusCode = 401;
  }

}