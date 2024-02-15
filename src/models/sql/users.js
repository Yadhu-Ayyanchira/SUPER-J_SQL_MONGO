const createUsersModel = (sequelize, { DataTypes }) => {
  const Users = sequelize.define("User", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    existingUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Users;
};

export default createUsersModel;
