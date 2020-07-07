'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoryPinjam = sequelize.define('HistoryPinjam', {
    mobile: DataTypes.STRING,
    jmlPinjam: DataTypes.TEXT,
    tujuanPinjam: DataTypes.TEXT,
    tglBayar: DataTypes.TEXT,
    bunga: DataTypes.STRING,
    tenorPinjam: DataTypes.STRING,
    tglJatuhTempo: DataTypes.STRING,
    jmlBayar: DataTypes.STRING,
    status_pinjam: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    pinjaman_dt: DataTypes.STRING,
    biaya_admin: DataTypes.STRING,
  }, {});
  HistoryPinjam.associate = function(models) {
    // associations can be defined here
  };
  return HistoryPinjam;
};