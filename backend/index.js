const express = require("express")
const app = express()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(morgan("dev"))

require("dotenv").config({ path: "backend/.env" })
require("./database/connection")

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const userRoute = require("./routes/UserRoute")
const hotelRoute = require("./routes/HotelRoute")
const accomodationRoute = require("./routes/AccomodationRoute")
const bookingRoute = require("./routes/BookingRoute")

app.use("/api/user", userRoute)
app.use("/api/hotel", hotelRoute)
app.use("/api/acc", accomodationRoute)
app.use("/api/book", bookingRoute)
app.use("/backend/uploads", express.static("backend/uploads"));



app.listen(process.env.PORT, () => {
    console.log(`Server has started in port ${process.env.PORT}`)
})


