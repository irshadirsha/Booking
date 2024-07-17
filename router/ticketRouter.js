const express = require('express');
const router = express.Router();
const { getTickets, createTicket } = require('../controller/TicketController');


// router.get('/:eventId', getTickets);
// router.post('/', createTicket);

module.exports = router;
