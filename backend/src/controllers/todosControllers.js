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

export const createTodo = (req, res) => {
    res.status(201).send("you sent data to server");
};

export const updateTodo = (req, res) => {
    res.status(200).send("you updated data on server");
};

export const deleteTodo = (req, res) => {
    res.status(200).send("you deleted data from server");
};


