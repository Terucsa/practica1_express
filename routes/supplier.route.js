import { Router } from "express";
import {
    getSupplierHandler,
    getSupplierHandlerByParam,
    postSupplierHandler,
    putSupplierHandler,
    deleteSupplierHandler,
} from "../controllers/supplier.controller.js";

const router = Router();

router.get('/', getSupplierHandler);
router.get('/:id', getSupplierHandlerByParam);
router.post('/', postSupplierHandler);
router.put('/', putSupplierHandler);
router.delete('/:id', deleteSupplierHandler);
export default router;