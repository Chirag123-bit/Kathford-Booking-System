const { addHotel, getAllHotels, getHotel, updateHotel } = require("../controller/HotelController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()

router.post("/add", isAuthenticated, addHotel)
router.get("/all", getAllHotels)
router.get("/:id", getHotel)
router.patch("/", isAuthenticated, updateHotel)


module.exports = router