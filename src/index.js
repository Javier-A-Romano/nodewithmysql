import express from 'express'
import employeesRoutes from './routes/employees.routes.js'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(employeesRoutes);

app.listen(PORT, function () {
    console.log("Server listening in " + PORT)
});