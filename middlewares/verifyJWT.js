import jwt from "jsonwebtoken";

const verifyJWT = (request, response, next) => {

    const authHeader = request.headers.authorization || request.cookies.cookie;

  if (!authHeader?.startsWith("Bearer ")) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      
      if (error) { return response.status(403).json({ message: "Forbidden" }); }

      request["authenticated"] = { userId: decoded.userId };

      next();

    },
  );
};

export default verifyJWT;
