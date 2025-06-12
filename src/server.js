import {validate} from "./config/middleware.js"
import express from 'express'

const app = express() // const porque no hace falta reasignar un valor en este caso ya que usamos una libreria
const port = 3000 // se puede asignar cualquier puerto

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.params)
  res.send('Got a POST request')
})

function validate(id, res){
    return /^\d+$/.test(userId) ? res.send("Si es numero") : res.status(404), res.send("no es numero")
}

app.get('/users/:userId/books/:bookId', (req, res) => {

    let userId= req.params["userId"]
    if(/^\d+$/.test(userId)){
        console.log("UserId")
    }else{
        console.log("No es un userID valido")
    }
    
  res.send(req.params)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
