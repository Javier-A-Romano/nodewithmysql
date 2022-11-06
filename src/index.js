import express from 'express'
import { pool } from './db.js'
import employeesRoutes from './routes/employees.routes.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use(employeesRoutes);

app.listen(PORT, function () {
    console.log("Server listening in " + PORT)
});