const Hotel = require("../models/HotelModel")

module.exports.addHotel = async (req, res) => {
    try {
        const { name, city, country } = req.body;
        const usedHotelName = await Hotel.findOne({ name })
        if (usedHotelName) {
            return res.json({
                "success": false,
                "msg": "Hotel With this name already exists"
            })
        }
        const newHotel = new Hotel({ name, city, country })
        newHotel.save().then((result) => {
            return res.json({
                "success": true,
                result
            })
        })
            .catch((err) => {
                return res.json({
                    "success": false,
                    "msg": err.message
                })
            })

    } catch (error) {
        return res.json({
            "success": false,
            "msg": error.message
        })
    }
}