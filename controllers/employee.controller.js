import { employees } from '../mocka-data/employee.data';

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

export  {
    getEmployeeHandler,
}