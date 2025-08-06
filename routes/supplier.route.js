import { Router } from "express";
import {
    getSupplierHandler,
    getSupplierHandlerByParam,
    postSupplierHandler,
} from "../controllers/supplier.controller.js";

const router = Router();

router.get('/', getSupplierHandler);
router.get('/:id', getSupplierHandlerByParam);
router.post('/', postSupplierHandler);
export default router;