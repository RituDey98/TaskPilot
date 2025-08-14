import express from "express";
import apiRoutes from "./routes/index.route";
import { dbUtils } from "./utils/db.utils";

const PORT = 3000;

const app = express();

app.use(express.json({}));

app.use("/api/v1/", apiRoutes);

app.listen(PORT, async () => {
    dbUtils.connectDB();
    console.log("Server running on http://localhost:" + PORT);
});
