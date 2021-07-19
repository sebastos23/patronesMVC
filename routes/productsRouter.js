let express = require('express');
let router = express.Router();
let controller = require('../controllers/productsController');

router.get('/:id', controller.product)





module.exports = router;