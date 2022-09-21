const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "project",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      description: {
        type: DataTypes.TEXT,
      },
      objetives: { type: DataTypes.ARRAY(DataTypes.STRING) },
      proposals: { type: DataTypes.ARRAY(DataTypes.STRING) },
      planningDate: { type: DataTypes.DATEONLY, allowNull: false },
      realDate: { type: DataTypes.DATEONLY },
      estimatedCost: { type: DataTypes.FLOAT },
      realCost: { type: DataTypes.FLOAT },
      duration: { type: DataTypes.INTEGER },
    },
    { timestamps: false }
  );
};
