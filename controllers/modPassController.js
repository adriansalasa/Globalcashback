import model from '../models';

const { Nasabah } = model;

class Nasabahs {
    

    static modify(req, res) {
        const{password} = req.body;
            return Nasabah
            .findOne({
                where: {mobile: req.params.mobile},
                })
            .then((nasabah) => {
                nasabah.update({
                password: password || nasabah.password                
                })
                .then((updatedNasabah) => {
                    res.status(200).send({
                       message: 'Password updated successfully',
                        data: {
                            password: password || updatedNasabah.password 
                        }
                    })
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    
}

export default Nasabahs