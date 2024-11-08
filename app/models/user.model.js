module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    });
  
    User.associate = (models) => {
      User.belongsToMany(models.Bootcamp, {
        through: "user_bootcamp",
        foreignKey: "user_id",
        otherKey: "bootcamp_id",
      });
    };
  
    return User;
  };
  