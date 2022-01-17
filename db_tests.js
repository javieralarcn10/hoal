const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('admin_increab', 'admin_increab', 'caramelo44', { host: '45.67.221.13', dialect: 'mysql' });

class Test extends Model {}
Test.init({
    page: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    url_a: DataTypes.STRING,
    url_b: DataTypes.STRING,
}, { sequelize, modelName: 'test' });

module.exports = { Test };