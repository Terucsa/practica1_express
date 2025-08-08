import { Router} from "express";
import {
    getProductsHandler,
    getProductsHandlerByParam,
    postProductHandler,
    putProductHandler,
    deleteProductHandler
} from "../controllers/product.controller.js";

const router = Router();
router.get('/', getProductsHandler);
router.get('/:id', getProductsHandlerByParam);
router.post('/', postProductHandler);
router.put('/', putProductHandler);
router.delete('/:id', deleteProductHandler);


export default router;