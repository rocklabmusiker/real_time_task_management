const express = require('express');
const router = express.Router();
const {createMilestone, getMilestone, getMilestoneById, updateMilestone, deleteMilestone} = require('../../controllers/milestoneController')

router.post('/createmilestone',createMilestone);
router.get('/getmilestone/:taskId', getMilestone);
router.get('/getonemilestone/:milestoneId', getMilestoneById);
router.put('/updatemilestone/:milestoneId', updateMilestone);
router.delete('/deletemilestone/:milestoneId', deleteMilestone);

module.exports = router 