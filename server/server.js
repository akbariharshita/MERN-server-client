require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const PORT = 1000;
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/service", serviceRoute);

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
