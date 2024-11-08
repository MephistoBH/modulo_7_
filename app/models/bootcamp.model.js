module.exports = (sequelize, DataTypes) => {
    const Bootcamp = sequelize.define("Bootcamp", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 5,
          max: 10,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Bootcamp.associate = (models) => {
      Bootcamp.belongsToMany(models.User, {
        through: "user_bootcamp",
        foreignKey: "bootcamp_id",
        otherKey: "user_id",
      });
    };
  
    return Bootcamp;
  };
  