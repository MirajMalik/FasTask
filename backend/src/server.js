import express from "express";
import todosRoutes from "./routes/todosRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);                                                        // apply rate limiter to all routes

// routes
app.use("/api/todos", todosRoutes);


connectDB().then(() => {                                                    // first connect to the database, then start the server
    app.listen(PORT, () => {
        console.log(`server connected on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    });
});
