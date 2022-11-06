import { pool } from '../db.js'

export const getEmployee = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM employee')
    res.json(rows)
}
export const getEmployeeID = async ({params}, res) => {
    const {id} = params
    const [rows]=await pool.query('SELECT * FROM employee WHERE id = ?',[id])
    if (rows.length<= 0) return res.status(404).json({
        message:'Employee not found'
    })
    res.json(rows[0])
}
export const createEmployee = async(req, res) => {
    const {name,salary} = req.body
    const [rows]=await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name , salary])
    res.send({
        id : rows.insertId,
        name,salary
    })
}
export const updateEmployee = async ({body,params}, res) => {
    const {id} = params
    const {name,salary} = body
    const [rows]=await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name,salary ,id])
    if (rows.affectedRows <= 0) return res.status(404).json({
        message:'Employee not found'
    })

    res.sendStatus(204)
}

export const deleteEmployee = async ({params}, res) => {
    const {id} = params
    const [rows]=await pool.query('DELETE FROM employee WHERE id = ?',[id])
    if (rows.affectedRows <= 0) return res.status(404).json({
        message:'Employee not found'
    })
    res.sendStatus(204)
}