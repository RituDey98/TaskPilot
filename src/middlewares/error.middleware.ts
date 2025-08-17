import { Request, Response } from "express";

export class APIError {
    status?: number;
    messages?: string[];

    constructor(status: number, messages: string[]) {
        this.status = status;
        this.messages = messages;
    }
}

const errorMiddleware = (error: APIError, req: Request, res: Response) => {
    console.error("Request:", req.method, req.url, req.body, "Error:", error);

    res.status(error.status || 500).json({
        messages: error.messages?.length
            ? error.messages
            : "Something Went Wrong",
    });
};

export default errorMiddleware;
