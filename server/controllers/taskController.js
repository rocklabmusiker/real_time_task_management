const task = require('../models/Task')
//
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const taskNew = await task.create({ title, description });
    res.status(201).json({
      taskNew,
      message: 'task created successful',
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//get all task
exports.getAllTask = async (req, res) => {
  try {
    const allTask = await task.find()
    res.json(allTask)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
//get specefic task
exports.getTaskByName = async (req, res) => {
  const taskName = req.params.title;
  try {
    const findTask = await task.findOne({ title: taskName });
    if (!findTask) {
      return res.status(404).json({
        message: 'task not found',
      })
    }
    res.json(findTask)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
//update task
exports.updateTask = async (req, res) => {
  const currentTitle = req.params.title;

  try {
    const { title: newTitle } = req.body;

    const result = await task.updateOne(
      { title: currentTitle },
      { title: newTitle },
    )

    res.json(result)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//delete task
exports.deleteTask = async (req, res) => {
  const currentTitle = req.params.title;
  try {
    const deleteTask = await task.deleteOne({ title:currentTitle });
    res.json(deleteTask);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
