const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "task",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      planningDate: { type: DataTypes.DATEONLY, allowNull: false },
      realDate: { type: DataTypes.DATEONLY },
      estimatedCost: { type: DataTypes.FLOAT },
      realCost: { type: DataTypes.FLOAT },
      duration: { type: DataTypes.INTEGER },
    },
    { timestamps: false }
  );
};
