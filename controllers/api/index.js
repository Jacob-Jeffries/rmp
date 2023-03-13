const router = require('express').Router();

const petRoutes = require('./petRoutes');
const ratingsRoutes = require('./ratingsRoutes');
const userRoutes = require('./userRoutes');

router.use('/pets', petRoutes);
router.use('/users', userRoutes);
// router.use('/ratings', ratingsRoutes);

module.exports = router;