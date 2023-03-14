const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/vd_education_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("connect successfully");
    } catch (error) {
        console.log("error successfully");
    }
}
module.exports = { connect };
