import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const data = ["read"];

const create = expressAsyncHandler(async (req: Request, res: Response) => {
    const name = req.body.name;
    data.push(name);
    res.status(201).json({
        message: "Added",
    });
});
const remove = expressAsyncHandler(async (req: Request, res: Response) => {
    const { params } = req;
    const id = params.id;
    const idNum: number = +id;
    data.splice(idNum, 1);
    res.status(200).json({
        message: "Removed",
    });
});
const list = expressAsyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
        data: data,
        message: "Fetched",
    });
});

export const controller = {
    create,
    remove,
    list,
};
