const router = require("express").Router();
const RestaurantsService = require("../services/restaurants.service");

router.post("/", async (req, res) => {
	res.status(500).json("not implemented");
});

router.get("/:unique", async (req, res) => {
	res.status(500).json("not implemented");
});
  
router.get("/", async (req, res) => {
	res.status(500).json("not implemented");
});

module.exports = router;