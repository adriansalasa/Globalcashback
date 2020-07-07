import model from '../models';

const { Village } = model;

class Villages {
    static get(req, res){
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        return Village
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Village Datas',
                datas,
                url: fullUrl
            }))
    }
    static getbyid(req, res) {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        return Village
            .findAll({
              where: {district_id: req.params.id},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data village',
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

export default Villages