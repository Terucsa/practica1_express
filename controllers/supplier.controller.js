import { suppliers } from '../mocka-data/supplier.data.js';
import {products} from "../mocka-data/product.data";

const getSupplierHandler = async (req, res) => {
    try{
        let response = {
            message: "success",
            data: {
                suppliers: suppliers,
                count: suppliers.length,
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

const getSupplierHandlerByParam = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const supplier = suppliers.find(s => s.id === id);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Ingresa un número' });
        }

        let response = {}

        if ( !supplier ) {
            return res.status(404).json({ error: 'Producto no existe' });
        }

        response = {
            message: "success",
            supplier: supplier,
        }
        res.status(200).json(response);
    }catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

const postSupplierHandler = async (req, res) => {
    try{
        const new_supplier = req.body;

        const supplier = suppliers.find(s => s.id == new_supplier.id);
        let response = {};
        if ( supplier ) {
            response = {
                message: "Este proveedor ya existe",
            }
            return res.status(409).json(response);
        }

        if (new_supplier.nombre === undefined || new_supplier.nombre === "") {
            response = {
                message: "Se requiere el nombre del proveedor",
            }
            return res.status(400).json(response);
        }

        products.push(new_supplier);

        response = {
            message: "success",
            data: {
                supplierId: new_supplier.id,
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
    getSupplierHandler,
    getSupplierHandlerByParam,
    postSupplierHandler,
}