import { products } from "../mocka-data/productos.data.js";

const getProductsHandler = async (req, res) => {
    try{
        let response = {
            message: "success",
            data: {
                products: products,
                count: products.length,
            },
        };
        res.status(200).json(response);
    }catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

const getProductsHandlerByParam = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const product = products.find(p => p.id === id);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Ingresa un número' });
        }

        let response = {}

        if ( !product ) {
            return res.status(404).json({ error: 'Producto no existe' });
        }

        response = {
            message: "success",
            product: product,
        }
        res.status(200).json(response);
    }catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

const postProductHandler = async (req, res) => {
    try{
        const new_product = req.body;

        const product = products.find(c => c.id == new_product.id);
        let response = {};
        if ( product ) {
            response = {
                message: "Este producto ya existe",
            }
            return res.status(409).json(response);
        }

        if (new_product.nombre === undefined || new_product.nombre === "") {
            response = {
                message: "Se requiere el nombre del producto",
            }
            return res.status(400).json(response);
        }

        products.push(new_product);

        response = {
            message: "success",
            data: {
                productId: new_product.id,
            }
        }
        return res.status(201).json(response);
    }catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}


export {
    getProductsHandler,
    getProductsHandlerByParam,
    postProductHandler
}