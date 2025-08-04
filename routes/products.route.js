import { Router } from "express";
import {
    getProductsHandler,
} from "../controllers/products.controller.js";
const router = Router();

router.get('/', getProductsHandler);

export default router;