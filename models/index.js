// Joins and such
const User = require('./user');
const Pet = require('./pet');
const Rating = require('./ratings');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };