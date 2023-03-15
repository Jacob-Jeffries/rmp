const router = require('express').Router();
const { where } = require('sequelize');
const { User } = require('../models');
const { Pet } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/user');
          }
        res.render('homepage', {loggedIn: req.session.loggedIn})
        return;
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
        const pet = await Pet.findAll({
            where: {
                user_id: req.session.userId
              }
        }
        )
        console.log(pet)
        res.render('userportal',
        {loggedIn: req.session.loggedIn,
        first_name: user.first_name,
        last_name: user.last_name,
        pet_name: pet[0].pet_name,
        pet_type: pet[0].type,
        pet_gender: pet[0].gender,
        pet_skill: pet[0].special_skills,
        pet_toy: pet[0].favorite_toy,
        owner_rating: pet[0].owner_rating,
        // others_rating: ,
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;