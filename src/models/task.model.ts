import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { dbUtils } from "../utils/db.utils";

export class Task extends Model<
    InferAttributes<Task>,
    InferCreationAttributes<Task>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare description: string;
}

Task.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
        timestamps: true,
        sequelize: dbUtils.sequelize,
        tableName: "tasks",
    }
);
