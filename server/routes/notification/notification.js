const express = require('express');
const router = express.Router();
const {
    createNotification,
    getNotification,
    getUnreadNotification,
    markUnreadNotification,
    deleteNotification
} = require('../../controllers/notificationController');
router.post('/notifications', createNotification);
router.get('/notifications/:userId', getNotification);
router.get('/notifications/:userId/unread', getUnreadNotification);
router.put('/notifications/:notificationId/read', markUnreadNotification);
router.delete('/notifications/:notificationId', deleteNotification);

module.exports = router;
