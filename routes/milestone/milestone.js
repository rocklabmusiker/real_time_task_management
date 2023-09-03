const express = require('express');
const router = express.Router;
const {createMilestone, getMilestone, getMilestoneById, updateMilestone, deleteMilestone} = require('../../controllers/milestoneController')

router.post('/',createMilestone)