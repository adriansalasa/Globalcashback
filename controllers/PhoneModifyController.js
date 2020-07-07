import model from '../models';

const { Nasabah } = model;

class Nasabahs {
    

    static modify(req, res) {
        const{mobile} = req.body;
            return Nasabah
            .findOne({
                where: {noktp: req.params.noktp},
                })
            .then((nasabah) => {
                nasabah.update({
                mobile: mobile || nasabah.mobile
                })
                .then((updatedNasabah) => {
                    res.status(200).send({
                       message: 'Phone Number updated successfully',
                        data: {
                            mobile: mobile || updatedNasabah.mobile,
                        }
                    })
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    
}

export default Nasabahs