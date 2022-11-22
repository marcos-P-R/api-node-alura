import mongoose from "mongoose";

mongoose.connect("urldomongoDb")

let db = mongoose.connection;

export default db;
