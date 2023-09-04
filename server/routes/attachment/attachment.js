const express = require('express');
const router = express.Router();
const {
    createAttachment,
    getAttachment,
    getAttachmentById,
    updateAttachment,
    deleteAttachment
} = require('../../controllers/attachementController');

router.post('/attachments', createAttachment);
router.get('/tasks/:taskId/attachments', getAttachment);
router.get('/attachments/:attachmentId', getAttachmentById);
router.put('/attachments/:attachmentId', updateAttachment);
router.delete('/attachments/:attachmentId', deleteAttachment);

module.exports = router;
