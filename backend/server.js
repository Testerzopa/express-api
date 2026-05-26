const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

let dataBase = []

app.get('/test', (req, res) => {
  res.json(dataBase)
})

app.post('/test', (req, res) => {
  dataBase = req.body
  res.json({message:"บันทึกแล้ว",data:dataBase})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})