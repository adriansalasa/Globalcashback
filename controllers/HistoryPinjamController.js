import model from '../models';

const { HistoryPinjam } = model;

class HistoryPinjams {
    static get(req, res){
        return HistoryPinjam
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nasabah Datas',
                datas
            }))
    }
    static getbyMobile(req, res) {
        return HistoryPinjam
            .findAll({
              where: {mobile: req.params.mobile, status_pinjam: 5},
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
   

    // static create(req, res) { 
    //     const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam} = req.body
    //     const mobile = req.params.mobile;
    //     return HistoryPinjam
    //         .create({
    //             mobile,
    //             jmlPinjam,
    //             tujuanPinjam,
    //             tglBayar,
    //             status_pinjam
    //         }).then(data => res.status(201).send({
    //             message: `Data Pengajuan Pinjaman anda berhasil di input silahkan tunggu `,
    //             data
    //         }))
    //     }
    static create(req, res) {
        // const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam, tglPinjam} = req.body
        const {jmlPinjam, tujuanPinjam, tglBayar, status_pinjam, pinjaman_dt, tglJatuhTempo, keterangan, jmlBayar, bunga, biaya_admin, tenorPinjam} = req.body
        const mobile = req.params.mobile;
        return HistoryPinjam           
                .create({mobile, jmlPinjam, tujuanPinjam, tglBayar, status_pinjam, pinjaman_dt, tglJatuhTempo, keterangan,   jmlBayar, bunga, biaya_admin, tenorPinjam})
				.then(data => res.status(201).send({
                			message: `Data Pengajuan Pinjaman anda berhasil di input silahkan tunggu`,
                			data
            		})            
            ).catch(error => res.status(400).send(error));
        }
    }
export default HistoryPinjams