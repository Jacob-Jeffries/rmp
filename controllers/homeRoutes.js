const router = require('express').Router();

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
        res.render('userportal',{loggedIn: req.session.loggedIn})
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;