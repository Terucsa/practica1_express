import { employees } from '../mocka-data/employee.data.js';

const getEmployeeHandler = async (req, res) => {
    try{
        let response = {
            message: "success",
            data: {
                employees: employees,
                count: employees.length,
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

const getEmployeeHandlerByParam = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const employee = employees.find(e => e.id === id);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Ingresa un número' });
        }

        let response = {}

        if ( !employee ) {
            return res.status(404).json({ error: 'Ese trabajador no existe' });
        }

        response = {
            message: "success",
            employee: employee,
        }
        res.status(200).json(response);
    }catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

const postEmployeeHandler = async (req, res) => {
    try{
        const new_employee = req.body;

        const employee = employees.find(e => e.id == new_employee.id);
        let response = {};
        if ( employee ) {
            response = {
                message: "Este empleado ya existe",
            }
            return res.status(409).json(response);
        }

        if (new_employee.nombre === undefined || new_employee.nombre === "") {
            response = {
                message: "Se requiere el nombre del empleado",
            }
            return res.status(400).json(response);
        }

        employees.push(new_employee);

        response = {
            message: "success",
            data: {
                employeeId: new_employee.id,
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

const putEmployeeHandler = async (req, res) => {
    try{
        const update_employee = req.body;
        const employee = employees.findIndex(e => e.id == update_employee.id);

        let response = {};
        if ( employee === -1 ) {
            response = {
                message: "Este empleado no existe",
            }
            return res.status(404).json(response);
        }

        employees[employee] = {
            ...employee[employee],
            ...update_employee,
        };

        response = {
            message: "success",
            data: {
                employeeId: update_employee.id,
            }
        }
        return res.status(201).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

const deleteEmployeeHandler = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const employee = employees.findIndex(e => e.id == id);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Ingresa un número' });
        }

        let response = {};
        if ( employee === -1 ) {
            response = {
                message: "Este empleado no existe",
            }
            return res.status(404).json(response);
        }

        employees.splice(id-1, 1);

        response = {
            message: "success",
            data: {
                employeeId: id,
            }
        }
        return res.status(201).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor"
        });
    }
}

export  {
    getEmployeeHandler,
    getEmployeeHandlerByParam,
    postEmployeeHandler,
    putEmployeeHandler,
    deleteEmployeeHandler,
}