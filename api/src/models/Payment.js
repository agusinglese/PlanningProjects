const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "payment",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      description: {
        type: DataTypes.STRING,
      },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      payment: { type: DataTypes.FLOAT, allowNull: false },
    },
    { timestamps: false }
  );
};
