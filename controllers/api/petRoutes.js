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

router.get('/:id', async (req, res) =>{
  // const id = parseInt(req.params.user_id);
  const {id} = req.params

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

module.exports = router;