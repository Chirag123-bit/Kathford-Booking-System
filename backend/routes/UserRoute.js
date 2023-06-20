const { register, login, logout, myDetails, updateProfile } = require("../controller/UserController")
const { isAuthenticated, authorizedRole } = require("../middleware/auth")


const router = require("express").Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me", isAuthenticated, myDetails)
router.patch("/", isAuthenticated, updateProfile)

module.exports = router