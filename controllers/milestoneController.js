const milestone = require('../models/Milestone');

exports.createMilestone = async (req, res) => {
    const { name, dueDate, status, taskId } = req.body;

    try {
        const newMilestone = new milestone({
            name,
            dueDate,
            status,
            task: taskId,
        });
        await newMilestone.save();
        res.json(newMilestone);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get milestone 

exports.getMilestone = async (req, res) => {
    const { taskId } = req.params;
    try {
        const getAllMilestone =await milestone.find({task: taskId});
        res.json(getAllMilestone);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get milestone by id

exports.getMilestoneById = async (req, res) => {
     const { milestoneId } =req.params;

     try {
        const getOneMilestone = await milestone.findById(milestoneId);
        res.json(getOneMilestone);
     } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//update milestone

exports.updateMilestone = async (req,res) => {
    const { milestoneId } =req.params;
    const { name, dueDate, status } = req.body;
    try {
        const updateOneMilestone = await milestone.findByIdAndUpdate(
            milestoneId,
            { name, dueDate, status },
            {new: true},
        );
        res.json(updateMilestone)
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//delete milestone

exports.deleteMilestone = async (req, res) => {
    const { milestoneId } = req.params;

    try {
        await milestone.findByIdAndDelete(milestoneId);
        res.json({
            message: 'delete milestone'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};