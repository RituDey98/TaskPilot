import Router from "express";
import taskRouter from "./tasks.route";
//TODO: import boardRouter from "./board.route";
//TODO: import cardRouter from "./card.route";

const router = Router();

router.use("/tasks", taskRouter);

//TODO: router.use("/board", boardRouter);
// TODO: router.use("/card", cardRouter);

export default router;
