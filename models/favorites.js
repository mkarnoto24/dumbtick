'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    id_events: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {});
  favorites.associate = function (models) {
    // associations can be defined here
    favorites.hasMany(models.users, {
      as: 'userId',
      foreignKey: 'users_id'
    })
    favorites.hasMany(models.events, {
      as: 'idEvents',
      foreignKey: 'id'
    })
  };
  return favorites;
};