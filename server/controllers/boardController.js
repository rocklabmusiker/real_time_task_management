const board = require('../models/Board');

// Create a new board document
exports.createBoard = async (req, res) => {
  
  try {
    const { boardName } = req.body;
    const userId = req.user.id;
    console.log(req.body)

    const newBoard = await board.create({
      boardName,
      createdBy: userId,
    });

    res.status(201).json({
      newBoard,
      message: 'Board created successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//Get all users
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
//Get a specefic board by name
exports.getBoardByName = async (req, res) => {
  const boardName = req.params.boardName;
  try {
    const foundBoard = await board.findOne({ boardName });
    if (!foundBoard) {
      return res.status(404).json({ 
        error: 'Board not found',
      });
    }
    res.json(foundBoard);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//update specefic board
exports.updateBoard = async (req, res) => {
  const boardName = req.params.boardName;
  try {
    const { boardName: newName, createdBy } = req.body;
    const updatedBoard = await board.updateOne({ boardName }, { boardName: newName, createdBy });

    res.json(updatedBoard);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//delete board
exports.deleteBoard = async (req, res) => {
  const boardName = req.params.boardName;
  try {
    const deleteOnBoard = await board.deleteOne({boardName});
    res.json(deleteOnBoard)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};