const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

module.exports = Restaurant;