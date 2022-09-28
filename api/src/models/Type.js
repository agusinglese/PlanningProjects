const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "type",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
