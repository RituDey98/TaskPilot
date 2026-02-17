import Router from "express";
import { controller } from "../controllers/tasks.controller";

const router = Router();

router
    .route("/")
    .post(controller.create)
    .get(controller.list)
    .delete(controller.removeAll);

router
    .route("/:id")
    .get(controller.listTask)
    .put(controller.update)
    .delete(controller.remove);

export default router;
