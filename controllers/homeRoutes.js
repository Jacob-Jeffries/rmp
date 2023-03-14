const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {loggedIn: req.session.loggedIn})
    } catch {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        console.log(req.session)
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
          }
          res.render('login');
    } catch {
        res.status(500).json(err);
    }
  });

  router.get('/ratings', async (req, res) => {
    try {
        res.render('ratings')
    } catch {
        res.status(500).json(err);
    }
});

router.get('/leaderboard', async (req, res) => {
    try {
        res.render('leaderboard')
    } catch {
        res.status(500).json(err);
    }
});

router.get('/user', async (req, res) => {
    try {
        res.render('userportal')
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;