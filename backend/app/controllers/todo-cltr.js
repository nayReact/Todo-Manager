const Todo = require('../model/todo')
const todoCltr = {}  //todo cltr object

//two apis
todoCltr.listAll = async (req, res) => {
    try {
        const todos = await Todo.find() //find the todo
        res.json(todos)
    } catch(e) {
        res.json(e)
    }
}

//defines a function called createTodo which is an async operation
todoCltr.createTodo = async(req, res) => {
        const { body } = req
        const todo = new Todo(body)
        try {
            await todo.save()
            res.json(todo)

    } catch(e) {
        res.json(e)
    }
}

todoCltr.deleteTodo = async(req, res) => {
    const {id} = req.params
    try {
        const todo = await Todo.findByIdAndDelete(id)
        res.json(todo)
    } catch(e) {
        res.json(e.error)
    }
}

todoCltr.updateTodo = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        const todo = await Todo.findByIdAndUpdate(id, body, {runValidators: true, new: true})
        res.json(todo)
    }catch(e) {
        res.json(e.error)
    }
}

module.exports = todoCltr