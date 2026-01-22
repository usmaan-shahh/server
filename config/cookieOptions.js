// secure: false allows cookies to be sent over HTTP (useful in development) and HTTPS Both.
// secure: true enforces cookies to be sent only over HTTPS (for security in production).

export const cookieOptions = {

  httpOnly: true,
  secure: false,
  sameSite: "lax",
  maxAge: 60 * 60 * 1000,

};
