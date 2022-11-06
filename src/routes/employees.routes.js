import { Router } from 'express'
import { createEmployee, getEmployee, deleteEmployee, updateEmployee,getEmployeeID } from '../controllers/employees.controller.js'

const router = Router()


router.get('/employes', getEmployee)
router.get('/employes/:id', getEmployeeID)
router.post('/employes', createEmployee)
router.put('/employes', updateEmployee)
router.delete('/employes/:id', deleteEmployee)

export default router