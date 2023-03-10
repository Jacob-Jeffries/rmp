const router = require('express').Router();
const petRoutes = require('./petRoutes');

router.use('/pet', petRoutes);

module.exports = router;
