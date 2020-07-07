import model from '../models';

const { PendPengguna } = model;

class PendPenggunas {
    // static get(req, res){
    //     return Pinjam
    //         .findAll()
    //         .then(datas => res.status(201).send({
    //             success: true,
    //             msg: 'Showing Nasabah Datas',
    //             datas
    //         }))
    // }
    static getbyid(req, res) {
        return PendPengguna
            .findOne({
              where: {id: req.params.id},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing Pendaftaran pengguna',
                        datas
                    })
                }else{
                    res.status(400).send({
                        success: true,
                        message: 'no data showing from Pendaftaran pengguna'
                    })
                }
            } 
        ).catch(error => res.status(400).send(error));
    }    
   
}

export default PendPenggunas