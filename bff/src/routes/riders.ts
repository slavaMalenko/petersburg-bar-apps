import { Router } from "express";
import { getRiders } from "../controllers";
import { checkCache } from "../middlewares";

const router = Router();

router.get("/", checkCache("riders"), getRiders);

export { router };
