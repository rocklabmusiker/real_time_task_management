const express = require('express');
const router = express.Router();

const { createBoardInvitations, getBoardInvitations, getAcceptedInvitation, getPendingInvitation} = require('../../controllers/boardInvitationController');

router.post('/board-invitations', createBoardInvitations);
router.get('/board-invitations/:userId', getBoardInvitations);
router.get('/board-invitations/:userId/pending', getPendingInvitation);
router.get('/board-invitations/:userId/accepted', getAcceptedInvitation);
module.exports = router;