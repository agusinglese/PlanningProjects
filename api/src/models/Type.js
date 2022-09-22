const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "type",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      name: {
        type: DataTypes.ENUM("Gestión", "Maquinarias y Servicios", "Edilicios"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
