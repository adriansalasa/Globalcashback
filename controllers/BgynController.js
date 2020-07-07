import model from '../models';

const { Bgyn } = model;

class Bgyns {
    static get(req, res) {
        return Bgyn
            .findOne({
              //where: {id: req.params.id},
              order: [ ['id', 'DESC'] ],
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing Background update',
                        datas
                    })
                }else{
                    res.status(400).send({
                        success: true,
                        message: 'no data showing from Background'
                    })
                }
            } 
        ).catch(error => res.status(400).send(error));
    }
        
    // static getbyid(req, res) {
    //     return Bgyn
    //         .findOne({
    //           where: {id: req.params.id},
    //           order: [ ['id', 'DESC'] ],
    //         })
    //         .then(datas => {
    //             if(datas){
    //                 res.status(200).send({
    //                     success: true,
    //                     message: 'Showing Background update',
    //                     datas
    //                 })
    //             }else{
    //                 res.status(400).send({
    //                     success: true,
    //                     message: 'no data showing from Background'
    //                 })
    //             }
    //         } 
    //     ).catch(error => res.status(400).send(error));
    // }

    static create(req, res) {
        const {Bgtime, bgklik} = req.body;
        return Bgyn
        .create({Bgtime, bgklik})

        .then(data => res.status(201).send({
            message: `Data BackgroundTime sudah terkirim `,
            data
        }))
    }
   
}

export default Bgyns