import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URI || "", { logging: false });

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to DB");
    } catch (error) {
        console.log("DB connection failed", error);
    }
};

export const dbUtils = {
    connectDB,
    sequelize,
};
