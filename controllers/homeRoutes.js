const router = require('express').Router();
const { where } = require('sequelize');
const { User } = require('../models');
const { Pet } = require('../models');
const withAuth = require('../utils/auth');

const sequelize = require('../config/connection');

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

  router.get('/ratings', withAuth, async (req, res) => {
    try {

        const results = await sequelize.query("SELECT * FROM pet ORDER BY RAND() LIMIT 1");
        console.log("test")
        req.session.petId = results[1][0].id;
        console.log(results)
        console.log(results[1][0])

        res.render('ratings', {
            loggedIn: req.session.loggedIn,
            filename: results[1][0].filename,
            pet_name: results[1][0].pet_name,
            special_skills: results[1][0].special_skills,
            favorite_toy: results[1][0].favorite_toy
        })
    } catch {
        res.status(500).json(err);
    }
});

router.get('/user', withAuth, async (req, res) => {
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

router.get('/oops', async (req, res) => {
    try {
        res.render('oops')
    } catch {
        res.status(500).json(err);
    }
});

router.get('/leaderboard', async (req, res) => {
    try {
        res.render('leaderboard', {loggedIn: req.session.loggedIn})
    } catch {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup')
    } catch {
        res.status(500).json(err);
    }
});

module.exports = router;

