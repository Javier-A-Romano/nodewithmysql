import { Router } from 'express'
import { createEmployee, getEmployee, deleteEmployee, updateEmployee } from '../controllers/employees.controller.js'

const router = Router()


router.get('/employes', getEmployee)
router.post('/employes', createEmployee)
router.put('/employes', updateEmployee)
router.delete('/employes', deleteEmployee)

export default router