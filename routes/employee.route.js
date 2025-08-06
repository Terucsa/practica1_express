import { Router } from 'express';
import {
    getEmployeeHandler,
    getEmployeeHandlerByParam,
    postEmployeeHandler
} from '../controllers/employee.controller.js'

const router = Router();
router.get('/', getEmployeeHandler);
router.get('/:id', getEmployeeHandlerByParam);
router.post('/', postEmployeeHandler);

export default router;