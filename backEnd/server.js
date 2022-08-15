const app = require("./app");

const dotenv = require("dotenv");

const connectDB = require("./config/dataBase");

// config
dotenv.config({path:"backEnd/config/config.env"});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})