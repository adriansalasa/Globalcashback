import model from '../models';

const { About } = model;

class Abouts {
    // static get(req, res){
    //     return Pinjam
    //         .findAll()
    //         .then(datas => res.status(201).send({
    //             success: true,
    //             msg: 'Showing Nasabah Datas',
    //             datas
    //         }))
    // }
    static getbyid(req, res) {
        return About
            .findOne({
              where: {id: req.params.id},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing About Us',
                        datas
                    })
                }else{
                    res.status(400).send({
                        success: true,
                        message: 'no data showing About Us'
                    })
                }
            } 
        ).catch(error => res.status(400).send(error));
    }    
   
}

export default Abouts