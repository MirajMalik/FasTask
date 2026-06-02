import express from "express";
import todosRoutes from "./routes/todosRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());

// routes
app.use("/api/todos", todosRoutes);



app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});