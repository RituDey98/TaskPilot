import Router from "express";
import { controller } from "../controllers/tasks.controller";

const router = Router();

router.route("/").get(controller.list).post(controller.create);

router.route("/:id").delete(controller.remove);

export default router;
