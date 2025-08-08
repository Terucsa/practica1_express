import { Router } from 'express';
import product_router from './product.route.js';
import employee_router from './employee.route.js';
import supplier_router from './supplier.route.js';
const router = Router();

//Rutas de productos
router.use('/products', product_router);

//Ruta de trabajadores
router.use('/employees', employee_router);

//Ruta de proveedores
router.use('/suppliers', supplier_router)

export default router;