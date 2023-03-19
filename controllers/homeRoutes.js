const router = require('express').Router();
const { where } = require('sequelize');
const { User, Pet, Rating } = require('../models');
const withAuth = require('../utils/auth');

const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('https://murmuring-garden-13240.herokuapp.com/user');
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
            res.redirect('https://murmuring-garden-13240.herokuapp.com/user');
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
        });
        let petArray =[]
        let newCount;

        for(let i=0; i < pet.length; i++){
            const count = await Rating.count({
                where: {
                  pet_id: pet[i].dataValues.id
            }}) + 1; 
              
            const sumRating = await Rating.sum('rank', {
            where: {
                pet_id: pet[i].dataValues.id
            }}) + pet[i].dataValues.owner_rating;
            
            const average = sumRating / count;

            pet[i].dataValues.sum = sumRating;
            pet[i].dataValues.count = count;
            pet[i].dataValues.average = average.toFixed(1);

            petArray.push(pet[i].dataValues);
        }

        console.log('---');
        console.log(petArray);
        res.render('userportal',
        {
        loggedIn: req.session.loggedIn,
        first_name: user.first_name,
        last_name: user.last_name,
        apiData: petArray
        });
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

