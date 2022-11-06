import { pool } from '../db.js'

export const getEmployee = (req, res) => res.send('get employe')
export const createEmployee = async(req, res) => {
    const {name,salary} = req.body
    const [rows]=await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name , salary])
    res.send(rows)
}
export const updateEmployee = (req, res) => res.send('update employe')
export const deleteEmployee = (req, res) => res.send('delete employe')