const boardInvitation = require('../models/boardInvitations');
const invitation = require('../models/boardInvitations');

//create board invitations

exports.createBoardInvitations = async (req, res) => {
    const { boardId, invitedUserId, invitedByUserId, message, expirationDate} = req.params;

    try {
        const boradInvitation = new invitation({

        board: boardId,
        invitedUser: invitedUserId,
        invitedBy: invitedByUserId,
        message,
        expirationDate,
        });
        await boradInvitation.save();
        res.json(boardInvitation);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

// get board invitations

exports.getBoardInvitations = async (req, res) => {
    const  { userId } = req.params;
    try {
        const getAllInviatation = await invitation.find(userId);
        res.json(getAllInviatation);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get pending board invitation

exports.getPendingInvitation = async (req, res) => {
    const { userId } = req.params;
    try {
        const boardInvitation = await invitation.find({
            invitedUser: userId,
            status: 'pending',
        });
        res.json(boardInvitation);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get accepted board invitation

exports.getAcceptedInvitation = async(req, res) => {
    const { userId } = req.params;
    try {
        const boardInvitation = await invitation.find({
            invitedUser: userId,
            status: 'accepted',
        });
        res.json(boardInvitation);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

//get reject board invitation

exports.getPendingInvitation = async (req, res) => {
    const { userId } = req.params;
    try {
        const boardInvitation = await invitation.find({
            invitedUser: userId,
            status: 'rejected',
        });
        res.json(boardInvitation);
    } catch(error) {
        res.status(500).json({
            error: error.message,
        });
    }
};