import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js";

// Load environment variables
dotenv.config({ path: "./config/.env" });

const app = express();

// CORS setup
app.use(
    cors({
        origin: [process.env.FRONTEND_URL], // e.g., http://localhost:5173
        methods: ["POST"],
        credentials: true,
    })
);

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConnection();

// Routes
app.use("/api/v1/reservation", reservationRoute);

// Error middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 SERVER STARTED AT PORT ${PORT}`);
});