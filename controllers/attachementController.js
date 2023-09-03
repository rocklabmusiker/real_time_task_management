const attachment = require('../models/Attachement');

//create attachment

exports.createAttachment = async (req, res) => {
    const { fileName, fileType, fileSize, contentType, data, taskId} = req.body;

    try {
        const newAttachment = new attachment({
            fileName,
            fileType,
            fileSize,
            contentType,
            data,
            task: taskId,
        });
        await newAttachment.save();
        res.json(newAttachment)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get attachment

exports.getAttachment = async (req, res) => {
    const { taskId } = req.params;

    try {
        const allAttachment = await attachment.find({task: taskId});
        res.json(allAttachment);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get attachment by id

exports.getAttachmentById = async (req, res) => {
    const { attachmentId } = req.params;

    try {
        const getAttchment = await attachment.findById(attachmentId);
        res.json(getAttchment)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//update attachment

exports.updateAttachment = async (req, res) => {
    const { attachmentId } = req.params;
    const { fileName, fileSize ,fileType, contentType, data } = req.body;

    try {
        const newAttachment = await attachment.findById(attachmentId);
        newAttachment.fileName =fileName,
        newAttachment.fileType = fileType,
        newAttachment.fileSize = fileSize,
        newAttachment.contentType = contentType,
        newAttachment.data = data,

        await newAttachment.save();
        res.json(newAttachment);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//delete attachment 

exports.deleteAttachment = async (req, res) => {
    const { attachmentId } = req.params;
    
    try {
        await attachment.findByIdAndDelete(attachmentId);
        res.json({
            message: 'attachment delete',
        });
    } catch(error) {
        res.json(500).json({
            error: error.message,
        });
    }
};