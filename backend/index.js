//require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const todoCltr = require('./app/controllers/todo-cltr')
const app = express()
const port = 3060
configureDB()
 
app.use(express.json())
app.use(cors())

app.get('/api/todo', todoCltr.listAll)
app.post('/api/todo', todoCltr.createTodo) 
app.delete('/api/todo/:id', todoCltr.deleteTodo)
app.put('/api/todo/:id',todoCltr.updateTodo)

app.listen(port, () => {
    console.log('runnning on the port', port)
})

