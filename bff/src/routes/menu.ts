import { Router } from "express";
import { getMenu, getSale } from "../controllers";
import { checkCache } from "../middlewares";

const router = Router();

router.get("/", checkCache("menu"), getMenu);
router.get("/sale", checkCache("menu-sale"), getSale);

export { router };
