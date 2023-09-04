const comment = require('../models/Comment');

// create comment for task

exports.createComment = async (req, res) => {
    const { taskId, authorId, text } = req.body;

    try {
        const commentNew = new comment({
         task: taskId,
         author: authorId,
         text,
        });
        await commentNew.save();
        res.json(commentNew);
    } catch (error){
        res.status(500).json({
            error: error.message
        });
    }
};

//get Comment

exports.getComment = async (req, res) => {
     
    try {
        const allComment = await comment.find();
        res.json(allComment);
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};

//get specefic comment

exports.getOneComment = async (req, res) => {
    const { commentId } = req.params;

    try {
        const showComment = await comment.findById(commentId);
        res.json(showComment)
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Update comment

exports.updateComment = async (req, res) => {
    const { commentId } = req.params;
    const { text } = req.body;
    
    try {
        const willUpdate = await comment.findByIdAndUpdate(commentId, { text });
        res.json(willUpdate);
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};

//delete message

exports.deleteComment = async (req, res) => {
    const { commentId } = req.params;

    try {
         await comment.findByIdAndRemove(commentId);
        res.json({
            message: 'comment delete'
        })
    } catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
};