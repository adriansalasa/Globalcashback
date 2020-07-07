import model from '../models';

const { Province } = model;

class Provinces {
    static get(req, res){
        return Province
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Province Datas',
                datas
            }))
    }
    static getbyid(req, res) {
        return Province
            .findByPk(req.params.id)
            .then(province => {
                if(province){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data province',
                        province
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

export default Provinces