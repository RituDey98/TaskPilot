import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { Task } from "../models/task.model";

const create = expressAsyncHandler(async (req: Request, res: Response) => {
    const { body } = req;
    const { name, description }: { name: string; description: string } = body;

    const task = Task.build({ name, description });

    await task.save();

    res.status(201).json({
        data: task,
        message: "Task created",
    });
});

const list = expressAsyncHandler(async (req: Request, res: Response) => {
    const tasks = await Task.findAll();
    console.log(tasks);
    res.status(200).json({
        data: tasks,
        message: "Fetched all tasks",
    });
});

const remove = expressAsyncHandler(async (req: Request, res: Response) => {
    const { params } = req;

    const task = await Task.findByPk(params.id);

    if (!task) {
        res.status(404).json({
            message: "task" + params.id + "Not Found",
        });
    } else {
        await task.destroy();
        res.status(200).json({
            message: "task" + params.id + "Deleted",
        });
    }
});

// //TODO: DELETE ALL TASK
const removeAll = expressAsyncHandler(async (req: Request, res: Response) => {
    await Task.truncate();

    res.status(200).json({
        message: "All tasks Deleted",
    });
});

const listTask = expressAsyncHandler(async (req: Request, res: Response) => {
    const { params } = req;

    const task = await Task.findByPk(params.id);

    if (!task) {
        res.status(404).json({
            message: "Task not found",
        });
    } else {
        res.status(200).json({
            data: task,
            message: "Task fetched",
        });
    }
});

const update = expressAsyncHandler(async (req: Request, res: Response) => {
    const { params, body } = req;
    const { name, description }: { name: string; description: string } = body;

    try {
        const [rowsAffected, updatedTask] = await Task.update(
            { name, description },
            { where: { id: params.id }, returning: true }
        );

        if (rowsAffected > 0) {
            console.log("Successfully updated Task");
            if (updatedTask && updatedTask.length > 0) {
                res.status(200).json({
                    data: updatedTask,
                    message: "Updated Task",
                });
            }
        } else {
            console.log("No Task found");
        }
    } catch (error) {
        console.error("Error updating Task", error);
    }
});

export const controller = {
    create,
    list,
    listTask,
    update,
    remove,
    removeAll,
};
