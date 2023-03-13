// Modular GET & POST routes for Pets

const router = require('express').Router();
const { Pet } = require('../../models');
const { update } = require('../../models/user');

router.post('/', async (req, res) => {
  try {
    const petData = await Pet.create(req.body);
    res.status(200).json(petData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req,res) => {
  try {
    const petData = await Pet.findByPk(req.params.id);
    res.status(200).json(petData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // With this update the user_id (foreign key) will always be the same
    const petData = await Pet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    const petUpdate = await Pet.findByPk(req.params.id);
    res.status(200).json(petUpdate);
  }catch(err){
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: { id: req.params.id }
    });

    if(!petData) {
      res.status(404).json({ message: 'No Pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;