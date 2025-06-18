import { validate } from "./config/middleware.js"
import express from 'express'
import agricultoresRoutes from './routes/agricultores.js'

const app = express()
const port = 3000


app.use(express.json())
app.use('/agricultores', agricultoresRoutes)

app.listen(port, () => {
  console.log(`🌐 Servidor corriendo en http://localhost:${port}`)
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   console.log(req.params)
//   res.send('Got a POST request')
// })

// app.get('/users/:userId/books/:bookId', (req, res) => {
//   let userId = req.params["userId"]
//   if (/^\d+$/.test(userId)) {
//     console.log("UserId válido")
//   } else {
//     console.log("No es un userId válido")
//     return res.status(400).send("ID inválido")
//   }

//   res.send(req.params)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
