import { Router } from "express";
import { checkUserDetails, getAllEmployees, getOneEmployees, loginEmployee, registerEmployee } from "../controllers/employeeControllers";
import { verifyToken } from "../interfaces/verifyToken";


const employee_router = Router()

employee_router.post('/register', registerEmployee)
employee_router.post('/login', loginEmployee)
employee_router.get('/',verifyToken, getAllEmployees)
employee_router.get('/check_user_details',verifyToken, checkUserDetails)
employee_router.get('/:id', verifyToken, getOneEmployees)

export default employee_router;