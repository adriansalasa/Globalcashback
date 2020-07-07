
import Nasabah from '../controllers/NasabahController';
import Opinjam from '../controllers/OpinjamController';
import Pinjam from '../controllers/PinjamController';
import Pinjam2 from '../controllers/PinjamController2';
import Pinjam3 from '../controllers/PinjamController3';
import HistPinjam from '../controllers/HistoryPinjamController';
import DelPinjm from '../controllers/PinjamController3';
import DelNull from '../controllers/DelNullController';
import Ouang from '../controllers/OuangController';
import Province from '../controllers/ProvinceController';
import Regency from '../controllers/RegencyController';
import District from '../controllers/DistrictController';
import Village from '../controllers/VillageController';
import VirtualAccount from '../controllers/VirtualAccountController';
import UpPhone from '../controllers/PhoneModifyController';
import ModRekening from '../controllers/UpRekeningController';
import ModPassword from '../controllers/modPassController';
import feedbackUser from '../controllers/UserFeedbackController';
import About from '../controllers/AboutController';
import PendfUser from '../controllers/PendPenggunaController';
import PrivaUser from '../controllers/PrivPenggunaController';
import BgynCtrl from '../controllers/BgynController';

import multer from 'multer';

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' +file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
    //reject file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
 
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})


export default (app) => {
    app.get('/nasabahs', Nasabah.get);
    app.get('/nasabah/:mobile', Nasabah.getbyMobile)
    app.post('/nasabah', upload.array('uploadimg', 2), Nasabah.create);
    app.put('/nasabahDone/:mobile', Nasabah.modify);
    
    app.get('/opinjam', Opinjam.get);

    app.get('/ouang', Ouang.get);

    app.get('/pinjams', Pinjam.get);
    app.post('/pinjam/:mobile', Pinjam.create);
    app.get('/pinjam/:mobile', Pinjam.getbyMobile);
    // app.put('/pinjamStatus/:mobile', Pinjam.modify);
    app.get('/pinjams2/:mobile', Pinjam2.getbyMobile);
    app.get('/pinjamk2/:mobile', Pinjam2.getbyMobile);

    app.get('/pinjamk3/:mobile', Pinjam3.getbyMobile);
    app.get('/pinjamhis/:mobile', HistPinjam.getbyMobile);
    app.post('/pinjamhis/:mobile', HistPinjam.create);
    app.delete('/pinjamDel/:mobile', DelPinjm.delete);
    app.delete('/pinjamDelNull/:mobile', DelNull.delete);

    app.put('/phoneUpdate/:noktp', UpPhone.modify);
    app.put('/rekeningUpdate/:mobile', ModRekening.modify);
    app.put('/passUpdate/:mobile', ModPassword.modify);

    app.post('/ufeed/:nohp', feedbackUser.create);
     
    app.get('/virtualaccounts/', VirtualAccount.get);
    app.get('/virtualaccount/:id', VirtualAccount.getbyBankID);

    app.get('/provinces', Province.get);
    app.get('/provinces/:id', Province.getbyid);

    app.get('/regencies', Regency.get);
    app.get('/regency/:id', Regency.getbyid);
    
    app.get('/districts', District.get);
    app.get('/district/:id', District.getbyid);
    
    app.get('/villages', Village.get);
    app.get('/village/:id', Village.getbyid);

    app.get('/about/:id', About.getbyid);

    app.get('/penduser/:id', PendfUser.getbyid);

    app.get('/privuser/:id', PrivaUser.getbyid);

    app.get('/recbgyn', BgynCtrl.get);
    app.post('/recbgyn/:id', BgynCtrl.create);
}