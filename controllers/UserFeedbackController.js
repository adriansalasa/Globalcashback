import model from '../models';

const { UserFeedback } = model;

class UserFeedbacks {

    // static modify(req, res) {
    //         return UserFeedback
    //         .findOne({
    //             where: {mobile: req.params.mobile},
    //             })
    //         .then((UserFeedback) => {
    //             UserFeedback.update({
    //             verified_status: '2' || UserFeedback.verified_status
    //             })
    //             .then((updatedUserFeedback) => {
    //             res.status(200).send({
    //                 message: 'UserFeedback updated successfully',
    //                 data: {
    //                 verified_status: verified_status|| updatedUserFeedback.verified_status
    //                 }
    //             })
    //             })
    //             .catch(error => res.status(400).send(error));
    //         })
    //         .catch(error => res.status(400).send(error));
    //     }

    static create(req, res) {

        const {tipe_saran, tgl, isiSaran, email} = req.body
        const nohp = req.params.nohp;
        return UserFeedback
            .create({
                tipe_saran,
                tgl,
                isiSaran,
                email,
                nohp
            }).then(data => res.status(201).send({
                message: `Your UserFeedback with the title has been created successfully `,
                data
            })
        ).catch(error => res.status(400).send(error));            
    }
}

export default UserFeedbacks