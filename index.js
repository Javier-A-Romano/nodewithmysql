import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
app.get('/employes', (req,res)=> res.send('get employe'))
app.post('/employes', (req,res)=> res.send('created employe'))
app.put('/employes', (req,res)=> res.send('update employe'))
app.delete('/employes', (req,res)=> res.send('deleted employe'))

app.listen(PORT, function () {
  console.log("Server listening in " + PORT)
});