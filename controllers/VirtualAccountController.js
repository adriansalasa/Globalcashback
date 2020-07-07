import model from '../models';

const { VirtualAccount } = model;

class VirtualAccounts {
    static get(req, res){
        return VirtualAccount
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nasabah Datas',
                datas
            }))
    }
    static getbyBankID(req, res) {
        return VirtualAccount
            .findOne({
              attributes: ['id', 'name', 'no_va'],
            //   where: {name: req.params.name},
                where: {id: req.params.id},
            })
            .then(datas => {
                if(datas){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data virtual',
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

export default VirtualAccounts