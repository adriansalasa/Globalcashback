import model from '../models';

const { Regency } = model;

class Regencies {
    static get(req, res){
        return Regency
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Regency Datas',
                datas
            }))
    }
    static getbyid(req, res) {
        return Regency
            .findAll({
              where: {province_id: req.params.id},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data province',
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
}

export default Regencies