const createTokenModel = (sequelize, { DataTypes }) => {
  const Users = sequelize.define("Token", {
    number: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Users;
};

export default createTokenModel;
