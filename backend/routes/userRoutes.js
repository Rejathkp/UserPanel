import express from "express";
import { getUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.put("/", updateUser);

export default userRouter;
