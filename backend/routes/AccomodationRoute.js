
const { addAccomodation, getAllAccomodations, getAccomodation, updateAccomodation } = require("../controller/AccomodationController")
const { isAuthenticated, authorizedRole, allowBoth } = require("../middleware/auth")

const router = require("express").Router()
router.post("/add", isAuthenticated, addAccomodation)
router.get("/all", getAllAccomodations)
router.patch("/", isAuthenticated, updateAccomodation)
router.get("/:id", allowBoth, getAccomodation)

module.exports = router