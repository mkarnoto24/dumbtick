'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    category_event: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    url_map: DataTypes.TEXT,
    img: DataTypes.STRING,
    create_by: DataTypes.INTEGER
  }, {});
  events.associate = function (models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      as: 'categoryId',
      foreignKey: 'category_event'
    })
    events.belongsTo(models.users, {
      as: 'createBy',
      foreignKey: 'create_by'
    })
    events.hasMany(models.orders, {
      as: 'eventOrder',
      foreignKey: 'event_order'
    })

  };
  return events;
};