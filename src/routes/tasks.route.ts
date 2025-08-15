import Router from "express";
import { controller } from "../controllers/tasks.controller";

const router = Router();

router.route("/").post(controller.create).get(controller.list);

router.route("/:id").delete(controller.remove);

export default router;
