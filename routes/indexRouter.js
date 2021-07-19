let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController');

router.get('/', controller.index)
router.get('/contactos', controller.contacto)




module.exports = router;