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
        const {tujuanPinjam, tglBayar, status_pinjam} = req.body
        const mobile = req.params.mobile;
        return HistoryPinjam
            .findOne({
              where: {mobile: req.params.mobile, status_pinjam: 5},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Data Sudah anda sudah tersimpan mohon tunggu',
			datas: jmlPinjam
                    })
                }else{
          		// HistoryPinjam.create({mobile, jmlPinjam,  tujuanPinjam,  tglBayar,  status_pinjam, tglPinjam})
                  HistoryPinjam.create({tujuanPinjam, tglBayar, status_pinjam})
				.then(data => res.status(201).send({
                			message: `Data Pengajuan Pinjaman anda berhasil di input silahkan tunggu`,
                			data
            			}))
                }
            } 
            ).catch(error => res.status(400).send(error));
        }
    }
export default HistoryPinjams