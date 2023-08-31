const express=require('express');
const router=express.Router();
const {createTask,getAllTask,getTaskByName,updateTask,deleteTask}=require('../../controllers/taskController');

router.post('/add',createTask);
router.get('/',getAllTask);
router.get('/:title',getTaskByName);
router.put('/updatetask/:title',updateTask);
router.delete('/deletetask/:title',deleteTask);
module.exports=router;