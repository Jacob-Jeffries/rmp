const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/user');
          }
        res.render('homepage', {loggedIn: req.session.loggedIn})
    } catch {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/user');
          }
          res.render('login');
    } catch {
        res.status(500).json(err);
    }
  });

  router.get('/ratings', async (req, res) => {
    try {
        res.render('ratings', {loggedIn: req.session.loggedIn})
    } catch {
        res.status(500).json(err);
    }
});

router.get('/user', async (req, res) => {
    try {  
        const user = await User.findByPk(req.session.userId)
        console.log(req.session)
        res.render('userportal',
        {loggedIn: req.session.loggedIn,
        first_name: user.first_name,
        last_name: user.last_name
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;