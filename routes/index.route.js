import { Router } from 'express';
import product_router from './product.route.js';
import employee_router from './employee.route.js';
import supplier_router from './supplier.route.js';
const router = Router();

//Rutas de productos
router.use('/product', product_router);

//Ruta de trabajadores
router.use('/employee', employee_router);

//Ruta de proveedores
router.use('/supplier', supplier_router)

export default router;