const router = require('express').Router();
const productController = require('../controllers/ProductsControllers');

// Define routes in the order of specificity
router.post('/', productController.createProduct); // Create a new product
router.get('/:id', productController.getProduct); // Get a specific product by ID
router.get('/search/:key', productController.searchProduct); // Search for a product
router.get('/', productController.getAllProduct); // Get all products
router.delete('/:id', productController.deleteProduct);


module.exports = router;
