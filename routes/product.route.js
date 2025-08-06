import { Router} from "express";
import {
    getProductsHandler,
    getProductsHandlerByParam,
    postProductHandler
} from "../controllers/product.controller.js";

const router = Router();
router.get('/', getProductsHandler);
router.get('/:id', getProductsHandlerByParam);
router.post('/', postProductHandler);


export default router;