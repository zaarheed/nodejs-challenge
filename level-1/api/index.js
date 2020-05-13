const restaurants = require('./restaurants');
const router = require("express").Router();

router.use("/restaurants", restaurants);

module.exports = router;