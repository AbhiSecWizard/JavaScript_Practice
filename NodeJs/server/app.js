const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRouter = require("./src/routes/user.route"); // Adjust path if needed
const app = express();
const connectDb = require("./src/config/db");
const postRouter = require("./src/routes/post.route");
// 1. CORS Configuration (Crucial for Cookies)
app.use(cors({
  origin: "http://localhost:5173", // Change to your frontend port if different
  credentials: true
}));

// 2. Middlewares
app.use(express.json());
app.use(cookieParser()); // Required to read req.cookies
connectDb()
// 3. Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});