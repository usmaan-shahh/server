import express from "express";
import "dotenv/config";
import corsOptions from "./config/corsOption.js";
import cors from "cors";
import cookieParser from "cookie-parser";

/*------ROUTERS------*/
import authRouter from "./modules/auth/auth.routes.js";
import userRouter from "./modules/user/user.routes.js";
import postRouter from "./modules/post/post.routes.js";

/*------EXPRESS INSTANCE------*/
const app = express();

/*------MIDDLEWARES------*/
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

/*------ROUTES------*/
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
