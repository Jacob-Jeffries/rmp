// GET & POST for the individual pet ratings
const router = require('express').Router();
const { Rating } = require('../../models');

// Create a new rating
router.post('/', async (req, res) => {
  try{
    console.log(req.body);
    console.log(req.session.petId);
    const ratingData = await Rating.create({
      rank: req.body.rank,
      pet_id: req.session.petId
    });
    res.status(200).redirect('/ratings');
  }catch(err){
    res.status(500).json(err);
  }
});

// Get all ratings
router.get('/', async (req, res) => {
  try{
    const ratingData = await Rating.findAll()
    res.status(200).json(ratingData);
  }catch(err){
      res.status(500).json(err);
    }
});

// Get all ratings for a specific pet_id
router.get('/:pet_id', async (req, res) => {
  try{
    const ratingData = await Rating.findAll({
      where: {
        pet_id: req.params.pet_id
      }
    })
    res.status(200).json(ratingData);
  }catch(err){
      res.status(500).json(err);
    }
});

// Get average ratings for pet_id
router.get('/:pet_id/avg', async (req, res) => {
  try{
    const count = await Rating.count({
      where: {
        pet_id: req.params.pet_id
    }}); 
    
    const sumRating = await Rating.sum('rank', {
      where: {
        pet_id: req.params.pet_id
    }});

    const pet_id = parseInt(req.params.pet_id);
    
    const average = { "pet_id": pet_id, "average_rating" : sumRating / count, "total_rating" : sumRating, "rating_count" : count};

    res.status(200).json(average);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;