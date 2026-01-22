import verifyJWT from "../../middlewares/verifyJWT.js"
import express from "express"
import * as userController from "./user.controller.js"

const router = express.Router();

// Get current user profile
router.get("/profile", verifyJWT, userController.fetchProfile);

// Update current user profile
router.put("/profile", verifyJWT, userController.updateProfile);

// Delete current user account
router.delete("/profile", verifyJWT, userController.deleteAccount);

// Change password
router.post("/profile/change-password", verifyJWT, userController.changePassword);

export default router;
