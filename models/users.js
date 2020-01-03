'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    img: DataTypes.STRING,
    login_as: DataTypes.STRING
  }, {});
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.events, {
      as: 'createBy',
      foreignKey: 'create_by'
    })
    users.hasMany(models.orders, {
      as: 'usersId',
      foreignKey: 'users_id'
    })
  };
  return users;
};