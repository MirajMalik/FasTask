import express from "express";
import todosRoutes from "./routes/todosRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// routes
app.use("/api/todos", todosRoutes);



app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});