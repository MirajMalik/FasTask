import Todo from "../models/todoModel.js";

export async function getTodos (req, res) {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) { 
        console.error("Error in getTodos:", error);  
        res.status(500).json({ message: "server error"});
    }
}; 

export async function createTodo (req, res) {
    try{
        const { title, description } = req.body;
        const newTodo = new Todo({
            title,
            description,
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }catch (error) {
        console.error("Error in createTodo:", error);
        res.status(500).json({ message: "server error"});
    }
    
};

export const updateTodo = (req, res) => {
    res.status(200).send("you updated data on server");
};

export const deleteTodo = (req, res) => {
    res.status(200).send("you deleted data from server");
};


