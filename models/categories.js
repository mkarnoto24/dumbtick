'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  categories.associate = function (models) {
    // associations can be defined here
    categories.hasMany(models.events, {
      as: 'categoryEvents',
      foreignKey: 'category_event'
    })
  };
  return categories;
};