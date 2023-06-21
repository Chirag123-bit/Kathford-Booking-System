const express = require("express")
const app = express()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(morgan("dev"))

require("dotenv").config()
require("./database/connection")

app.use(express.json())

const userRoute = require("./routes/UserRoute")
const hotelRoute = require("./routes/HotelRoute")
app.use("/api/user", userRoute)
app.use("/api/hotel", hotelRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server has started in port ${process.env.PORT}`)
})


