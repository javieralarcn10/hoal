const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('admin_increabapi', 'admin_increabapi', 'caramelo44', { host: '45.67.221.13', dialect: 'mysql' });

class Analytics extends Model {}
Analytics.init({
    client: DataTypes.STRING,
    event: DataTypes.STRING,
    user: DataTypes.STRING,
    mobile: DataTypes.BOOLEAN,
    timestamp: DataTypes.DOUBLE,
    url: DataTypes.STRING,
    referrer: DataTypes.STRING,
}, { sequelize, modelName: 'analytics' });


module.exports = { Analytics };