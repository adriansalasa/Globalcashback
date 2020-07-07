'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nasabah = sequelize.define('Nasabah', {
    mobile: DataTypes.STRING,
    // nama: DataTypes.STRING,
    nama_depan: DataTypes.STRING,
    nama_belakang: DataTypes.STRING,
    title: DataTypes.STRING,
    location: DataTypes.TEXT,
    address: DataTypes.TEXT,
    lstay: DataTypes.STRING,
    momname: DataTypes.STRING,
    comname: DataTypes.STRING,
    comfield: DataTypes.STRING,
    comaddress: DataTypes.TEXT,
    lwork: DataTypes.STRING,
    avsalary: DataTypes.STRING,
    comlocation: DataTypes.TEXT,
    ename1: DataTypes.STRING,
    erel1: DataTypes.STRING,
    emobile1: DataTypes.STRING,
    ename2: DataTypes.STRING,
    erel2: DataTypes.STRING,
    emobile2: DataTypes.STRING,
    idcardurl: DataTypes.STRING,
    profileurl: DataTypes.STRING,
    noktp: DataTypes.STRING,
    tgllhr: DataTypes.STRING,
    agama: DataTypes.STRING,
    jkelamin: DataTypes.STRING,
    married: DataTypes.STRING,
    verified_status: DataTypes.INTEGER,    
    id_bank: DataTypes.STRING,
    no_rekening: DataTypes.STRING,
    nama_rekening:DataTypes.STRING,
    username:DataTypes.STRING,
    password:DataTypes.STRING

  }, {});
  Nasabah.associate = function(models) {
    // associations can be defined here
  };
  return Nasabah;
};