import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()


router.get('/employes', async (req, res) => {
    res.send('get employe')
})
router.post('/employes', (req, res) => res.send('created employe'))
router.put('/employes', (req, res) => res.send('update employe'))
router.delete('/employes', (req, res) => res.send('deleted employe'))

export default router