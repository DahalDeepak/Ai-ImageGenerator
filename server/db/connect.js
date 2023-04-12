import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // used for search function
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb atlas db"))
    .catch((err) => {
      console.error("failed to connect with database");
      console.error(err);
    });
};

export default connectDB;
