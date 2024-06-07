const mongoose = require('mongoose');
const initData = require('./data');
const Listings = require("../models/listing")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listings.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "665b72ac11a42a5c5ac0db16"}))
    await Listings.insertMany(initData.data);
    console.log("Data has inserted");
}

initDB();