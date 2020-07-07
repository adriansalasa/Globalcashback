import model from '../models';

const { Pinjam } = model;

class Pinjams {
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
              where: {mobile: req.params.mobile, status_pinjam: 1},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data nasabah',
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
    static create(req, res) {
        const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam} = req.body
        const mobile = req.params.mobile;
            return Pinjam
                .findOne({
                where: {mobile: req.params.mobile, status_pinjam: 1},
                })
                .then(datas => {
                    if(datas){
                        res.status(200).send({
                            success: true,
                            message: 'Data Sudah anda sudah tersimpan mohon tunggu',
                datas: jmlPinjam
                        })
                    }else{
                    Pinjam.create({mobile, jmlPinjam,  tujuanPinjam,  tglBayar,  status_pinjam})
                    .then(data => res.status(201).send({
                                message: `Data Pinjaman anda berhasil di input silahkan tunggu`,
                                data
                            }))
                    }
                } 
            ).catch(error => res.status(400).send(error));
    }
}

export default Pinjams