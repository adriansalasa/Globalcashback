import model from '../models';

const { Nasabah } = model;

class Nasabahs {
    

    static modify(req, res) {
        const{no_rekening, id_bank} = req.body;
            return Nasabah
            .findOne({
                where: {mobile: req.params.mobile},
                })
            .then((nasabah) => {
                nasabah.update({
                no_rekening: no_rekening || nasabah.no_rekening,
                id_bank: id_bank || nasabah.id_bank                
                })
                .then((updatedNasabah) => {
                    res.status(200).send({
                       message: 'New Rekening & Bank ID updated successfully',
                        data: {
                            no_rekening: no_rekening || updatedNasabah.no_rekening,
                            id_bank: id_bank || updatedNasabah.id_bank
                        }
                    })
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    
}

export default Nasabahs