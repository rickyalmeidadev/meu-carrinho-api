const express = require('express');
const router = express.Router();

const productControllers = require('./controllers/productControllers');
const uploadCloud = require('../configs/cloudinary');

router.post('/new', uploadCloud.single('image'), productControllers.createProduct);
router.patch('/edit/:id', uploadCloud.single('file'), productControllers.editProduct);
router.delete('/delete/:id', productControllers.deleteProduct);
router.get('/:id', productControllers.getProduct);

module.exports = router;

// e ai galera