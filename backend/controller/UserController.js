const User = require("../models/UserModel")
const bcrypt = require("bcrypt")


module.exports.sayHello = (req, res) => {
    return res.json({
        "msg": "Hello World"
    })
}

module.exports.register = async (req, res) => {
    try {

        const { fname, lname, username, email, password } = req.body;

        const usernameCheck = await User.findOne({ username })
        if (usernameCheck) {
            return res.json({
                "success": false,
                "msg": "Username Already Taken"
            })
        }

        const emailCheck = await User.findOne({ email })
        if (emailCheck) {
            return res.json({
                "success": false,
                "msg": "Email Address Already in Use"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ fname, lname, username, email, password: hashedPassword })
        user.save().then((result) => {
            return res.json({
                "success": true,
                "msg": "User Account Created",
                user,
            })
        })
            .catch((err) => {
                return res.json({
                    "success": false,
                    "msg": err,
                })
            })

    } catch (error) {
        return res.json({
            "status": false,
            "msg": error.message
        })
    }
}



