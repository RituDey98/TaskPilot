import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { Task } from "../models/task.model";

//TODO: CREATE TASK

const create = expressAsyncHandler(async (req: Request, res: Response) => {
    const { body } = req;
    const { description }: { description: string } = body;

    const task = Task.build({ description });

    await task.save();

    res.status(201).json({
        data: task.id,
        message: "Task created",
    });
});

//TODO: GET ALL TASK
const list = expressAsyncHandler(async (req: Request, res: Response) => {
    const tasks = await Task.findAll();
    console.log(tasks);
    res.status(200).json({
        data: tasks,
        message: " Fetched all tasks",
    });
});

//TODO: DELETE TASK BY ID
const remove = expressAsyncHandler(async (req: Request, res: Response) => {
    const { params } = req;

    const task = await Task.findByPk(params.id);

    if (!task) {
        console.log("No such task found");
    } else {
        await task.destroy();
    }
    res.status(200).json({
        message: "task" + { task } + "Deleted",
    });
});

//TODO: GET TASK BY ID

//TODO: UPDATE TASK BY ID

export const controller = {
    create,
    list,
    remove,
};
