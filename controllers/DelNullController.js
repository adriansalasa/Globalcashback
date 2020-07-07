 import model from '../models';

    const { Pinjam } = model;

    class DelPinjmNulls {

        static delete(req, res) {
                // const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam} = req.body
                const mobile = req.params.mobile;
                    return Pinjam
                        .destroy({
                            where: {mobile: req.params.mobile, status_pinjam: 'null'},
                        })
                        .then(datas => {
                            if(datas){
                                res.status(200).send({
                                    success: true,
                                    message: 'Data null Berhasil dihapus',
                                    datas
                                })
                            }else{
                                res.status(400).send({
                                    success: true,
                                    message: 'gagal hapus data null'
                                })
                            }
                        } 
                    ).catch(error => res.status(400).send(error));
            }
    }
    export default DelPinjmNulls;