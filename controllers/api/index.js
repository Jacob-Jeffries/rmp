const router = require('express').Router();

const petRoutes = require('./petRoutes');
const ratingsRoutes = require('./ratingsRoutes');
const userRoutes = require('./userRoutes');
// const leaderboardRoutes = require('./leaderboardRoutes')

router.use('/pets', petRoutes);
router.use('/users', userRoutes);
router.use('/ratings', ratingsRoutes);
// router.use('/leaderboard', leaderboardRoutes);

module.exports = router;