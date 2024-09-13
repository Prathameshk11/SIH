const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'),
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM('PLANNING', 'ONGOING', 'COMPLETED'),
    defaultValue: 'PLANNING',
  },
  isInterDepartmental: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Project;