const express = require("express");
const createTodo = require("../controllers/createTodoController");
const getTodo = require("../controllers/getTodoController");
const getTodoOne = require("../controllers/getTodoByIdController");
const updateTodo = require("../controllers/updateTodoController");
const deleteTodo = require("../controllers/deleteTodoController");
const router  = express.Router();


router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoOne);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

module.exports = router;