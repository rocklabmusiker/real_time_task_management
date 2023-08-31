const express = require('express');
const router = express.Router();
const {createComment, getComment ,getOneComment, updateComment , deleteComment} = require('../../controllers/commentController');

// comment Urls

router.post('/addcomment', createComment);
router.get('/tasks/:taskId/comments', getComment);
router.get('/comments/:commentId', getOneComment)
router.put('/comments/:commentsId', updateComment);
router.delete('/comments/:commentsId', deleteComment);

module.exports = router;