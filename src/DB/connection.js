const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://dharasolanki:cs8fnTf0LxCSDnWl@cluster0.sczq14s.mongodb.net/ABCStock", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const con = mongoose.connection;

con.on("error", console.error.bind(console, "connection error!"));

con.on("open", function () {
  console.log("database connected  successfully");
});
