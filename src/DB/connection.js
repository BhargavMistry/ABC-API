import { set, connect, connection } from "mongoose";

set("strictQuery", false);
connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
});

const con = connection;

con.on("error", console.error.bind(console, "connection error!"));

con.on("open", function () {
  console.log("database connected  successfully");
});
