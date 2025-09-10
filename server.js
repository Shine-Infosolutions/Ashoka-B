const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

const bookingRoutes = require("./src/routes/bookingRoutes");
const menuRoutes = require("./src/routes/menuRoutes");
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://budha-f.vercel.app",
  "https://budha-f-main.vercel.app",
  "https://budha-b-yyq9.vercel.app",
  "http://127.0.0.1:5500",
  "https://buddha-avenue-customer-f.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/menu", menuRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API running ✅");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
