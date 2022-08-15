const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        // useCreatIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    }).then((data)=>{
        console.log(`Mongodb connect to server: ${data.connection.host}`)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB