// Modular GET & POST routes for Users
const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all pets associated with a single user
router.get('/:user_id', async (req, res) =>{
  // const id = parseInt(req.params.user_id);
  const {user_id: id} = req.params

  try {
    const petData = await Pet.findAll({
      where: {
        user_id: id
      }
    })
    res.status(200).json(petData);

  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/singleUser/:user_id', async (req, res) =>{
  try {
    const userData = await User.findByPk(req.params.user_id)
    res.status(200).json(userData);

  }catch(err){
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      console.log(
        '🚀 ~ file: userRoutes.js ~ line 58 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
