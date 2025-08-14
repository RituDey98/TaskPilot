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
    declare description: string;
}

Task.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: false,
        timestamps: true,
        sequelize: dbUtils.sequelize,
        tableName: "tasks",
    }
);
