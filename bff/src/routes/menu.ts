import { Router } from "express";
import { getMenu } from "../controllers";
import { checkCache } from "../middlewares";

const router = Router();

router.get("/", checkCache("menu"), getMenu);

export { router };
