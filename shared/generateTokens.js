import jwt from "jsonwebtoken";

export const generateTokens = ({ id }) => {
  const payload = { userId: id };

  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    }),
  };
};

export default generateTokens;
