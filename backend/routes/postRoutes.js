import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import express from "express";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

export default router;
