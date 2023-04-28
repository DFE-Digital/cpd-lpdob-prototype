const express = require('express');
const router = express.Router();

const v24Routes = require('./routes/v24');

router.use('/', v24Routes);

module.exports = router;