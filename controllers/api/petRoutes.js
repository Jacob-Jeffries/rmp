// Modular GET & POST routes for Pets

const router = require('express').Router();
const { Pet } = require('../../models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix +'.jpg')
  }
})

const upload = multer({ storage: storage })



router.post('/', upload.single('uploaded_image'), async (req, res) => {
  try {
    console.log(req.body);
    const petData = await Pet.create({
      pet_name: req.body.pet_name,
      type: req.body.type,
      gender: req.body.gender,
      special_skills: req.body.special_skills,
      favorite_toy: req.body.favorite_toy,
      filename: `/images/${req.file.filename}`,
      user_id: req.session.userId,
      owner_rating: req.body.owner_rating
    });
    res.status(200).redirect('/user')
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