
const Sequelize = require('sequelize')
const db = require('../database/db');

const Clan = db.define('Clan',{
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: Sequelize.STRING
    },
    Descricao: {
        type: Sequelize.STRING
    },
    Imagem: {
        type: Sequelize.BLOB
    },
    TipoImagem: {
        type: Sequelize.STRING
    },
    NomeImagem: {
        type: Sequelize.STRING
    },
})
db.sync();
module.exports = Clan;