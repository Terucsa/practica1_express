import { Router } from 'express';
import product_router from './products.route.js';
import employee_router from './employee.route.js';

const router = Router();

//Rutas de productos
router.use('/products', product_router);

//Ruta de trabajadores
router.use('/employee', employee_router);

export default router;