import model from '../models';

const { District } = model;

class Districts {
    static get(req, res){
        return District
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing District Datas',
                datas
            }))
    }
    static getbyid(req, res) {
        return District
            .findAll({
              where: {regency_id: req.params.id},
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

export default Districts