import { Router } from 'express';
import {
    getEmployeeHandler
} from    '../controllers/employee.controller'

const router = Router();
router.get('/', getEmployeeHandler);

export default router;