import model from '../models';

const { Nasabah } = model;

class Nasabahs {
    static get(req, res){
        return Nasabah
            .findAll()
            .then(datas => res.status(201).send({
                success: true,
                msg: 'Showing Nasabah Datas',
                datas
            }))
    }
    static getbyMobile(req, res) {
        return Nasabah
            .findOne({
              where: {mobile: req.params.mobile},
            })
            .then(nasabah => {
                if(nasabah){
                    res.status(200).send({
                        success: true,
                        message: 'Showing data nasabah',
                        nasabah
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

static modify(req, res) {
        return Nasabah
          .findOne({
              where: {mobile: req.params.mobile},
            })
          .then((nasabah) => {
            nasabah.update({
              verified_status: '2' || nasabah.verified_status
            })
            .then((updatedNasabah) => {
              res.status(200).send({
                message: 'Nasabah updated successfully',
                data: {
                  verified_status: verified_status|| updatedNasabah.verified_status
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
    }

    static create(req, res) {
	     const idcardurl = process.env.IMG_ROOT+'/'+req.files[0].filename
         const profileurl = process.env.IMG_ROOT+'/'+req.files[1].filename
//const idcardurl = '11';
        //const profileurl = '22';

        const { mobile, nama_depan, nama_belakang, title, location, address, lstay, momname, comname, comfield, comaddress, lwork, avsalary, comlocation, ename1, erel1, emobile1, ename2, erel2, emobile2, noktp, tgllhr, agama, jkelamin, married, verified_status, id_bank, no_rekening, nama_rekening} = req.body
    
        return Nasabah
            .create({
                mobile,
                nama_depan,
                nama_belakang,
                // nama,
                title,
                location,
                address,
                lstay,
                momname,
                comname,
                comfield,
                comaddress,
                lwork,
                avsalary,
                comlocation,
                ename1,
                erel1,
                emobile1,
                ename2,
                erel2,
                emobile2,
                idcardurl,
                profileurl,
		noktp, 
		tgllhr, 
		agama, 
		jkelamin,
		married,
                verified_status,
                id_bank,
                no_rekening, 
                nama_rekening
            }).then(data => res.status(201).send({
                message: `Your nasabah with the title ${title} has been created successfully `,
                data
            }))
    }
}

export default Nasabahs