import { Router } from 'express';
import {
    deleteEmployeeHandler,
    getEmployeeHandler,
    getEmployeeHandlerByParam,
    postEmployeeHandler,
    putEmployeeHandler,
} from '../controllers/employee.controller.js'

const router = Router();
router.get('/', getEmployeeHandler);
router.get('/:id', getEmployeeHandlerByParam);
router.post('/', postEmployeeHandler);
router.put('/', putEmployeeHandler);
router.delete('/:id', deleteEmployeeHandler);

export default router;