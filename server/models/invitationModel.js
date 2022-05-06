module.exports = (sequelize, DataTypes) => {
  const Invitation = sequelize.define("invitation", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    relation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attendance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    people: {
      type: DataTypes.INTEGER,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return Invitation;
};
