import express from "express";
import apiRoutes from "./routes/index.route";

const PORT = 3000;

const app = express();

app.use(express.json({}));

app.use("/api/v1/", apiRoutes);

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
