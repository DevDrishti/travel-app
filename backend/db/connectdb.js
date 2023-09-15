const mongoose = require("mongoose");
const uri=process.env.URI
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(uri || "mongodb+srv://devdrishti404:Tet3aWWNBJxFpI6h@devdrishti.v8cwzm8.mongodb.net/?retryWrites=true&w=majority"/* ,{family:4} */);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;