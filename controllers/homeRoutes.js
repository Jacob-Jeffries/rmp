const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
          }
          res.render('login');
    } catch {
        res.status(500).json(err);
    }
  });

module.exports = router;