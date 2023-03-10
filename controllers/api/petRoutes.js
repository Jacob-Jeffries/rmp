// Modular GET & POST routes for Pets

const router = require('express').Router();
const { Pet } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;