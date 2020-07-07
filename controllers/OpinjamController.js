import model from '../models';

const { OpsiPinjam }  = model;

class Opsipinjams {
    static get(req, res){
        return OpsiPinjam
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nasabah Datas',
                datas
            }))
    }
}

export default Opsipinjams