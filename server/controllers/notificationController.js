const notification = require('../models/Notification');

//create comment

exports.createNotification = async (req, res) => {
    const { taskId, authorId, text, type, priority, url } = req.body;

    try {
        const newNotification = new notification({
            task: taskId,
            author: authorId,
            text,
            type,
            priority,
            url,
        });
        await newNotification.save();
        res.json(newNotification);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get notifications

exports.getNotification = async (req,res) => {
    const { userId } = req.params;

    try{
        const getOneNotification = await notification.find({author: userId});
        res.json(getOneNotification);
    }catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get unread notification

exports.getUnreadNotification = async (req, res) => {
    const { userId } = req.params;

    try {
        const unreadNotification = await notification.find({ author: userId, read: false });
        res.json(unreadNotification);

    } catch(error) {
    res.status(500).json({
        error: error.message,
    });
    }
};

// mark read Notification

exports.markUnreadNotification = async (req, res) =>{
    const { notificationId } = req.params;

    try {
        const readNotification = await notification.findById(notificationId);
        readNotification.read = true,
        await readNotification.save();
        res.json(readNotification);
    } catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
};

// delete notification
 
exports.deleteNotification = async (req, res) => {
    const { notificationId } = req.params;

    try {
        await notification.findByIdAndRemove(notificationId);
        res.json({ message: 'Notification Delete' });
    } catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
};