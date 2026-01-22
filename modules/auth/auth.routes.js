import express from "express";
import * as authController from "./auth.controller.js";
import * as z from "./auth.schema.js"
import { validator } from "../../middlewares/validator.js";
const router = express.Router();

router.post("/register", validator(z.registerSchema), authController.register);

router.post("/login", validator(z.loginSchema), authController.login);

router.post("/logout", authController.logout)

export default router;