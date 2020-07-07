import model from '../models';

const { Pinjam } = model;

class Pinjams3 {
    static get(req, res){
        return Pinjam
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nasabah Datas',
                datas
            }))
    }
    static getbyMobile(req, res) {
        return Pinjam
            .findOne({
              where: {mobile: req.params.mobile, status_pinjam: 5},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data Pembayaran',
                        datas
                    })
                }else{
                    res.status(400).send({
                        success: true,
                        message: 'no data showing id that'
                    })
                }
            } 
        ).catch(error => res.status(400).send(error));
    }

    static delete(req, res) {
        // const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam} = req.body
        const mobile = req.params.mobile;
            return Pinjam
                .destroy({
                    where: {mobile: req.params.mobile, status_pinjam: 5},
                })
                .then(datas => {
                    if(datas){
                        res.status(200).send({
                            success: true,
                            message: 'Berhasil hapus data',
                            datas
                        })
                    }else{
                        res.status(400).send({
                            success: true,
                            message: 'gagal hapus data'
                        })
                    }
                } 
            ).catch(error => res.status(400).send(error));
    }          
    
}

export default Pinjams3