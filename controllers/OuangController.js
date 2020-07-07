import model from '../models';

const { OpsiUang }  = model;

class Opsiuangs {
    static get(req, res){
        return OpsiUang
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nilai Pinjam',
                datas
            }))
    }
}

export default Opsiuangs