'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pinjam = sequelize.define('Pinjam', {
    mobile: DataTypes.STRING,
    tglPinjam: DataTypes.TEXT,
    jmlPinjam: DataTypes.TEXT,
    tujuanPinjam: DataTypes.TEXT,
    tglBayar: DataTypes.TEXT,
    bunga: DataTypes.STRING,
    tenorPinjam: DataTypes.STRING,
    tglJatuhTempo: DataTypes.STRING,
    jmlBayar: DataTypes.STRING,
    status_pinjam: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    biaya_admin: DataTypes.STRING,
  }, {});
  Pinjam.associate = function(models) {
    // associations can be defined here
  };
  return Pinjam;
};