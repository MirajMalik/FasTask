import Todo from "../models/todoModel.js";

export async function getTodos (req, res) {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });           // newest to oldest
        res.status(200).json(todos);
    } catch (error) { 
        console.error("Error in getTodos:", error);  
        res.status(500).json({ message: "server error"});
    }
}; 

export async function getSingleTodo (req, res) {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    } catch (error) { 
        console.error("Error in getSingleTodo:", error);  
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

export async function updateTodo (req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(                                       // Model.findByIdAndUpdate(id, updateData, options)
            id,
            {
                title,
                description,
            },   
            { new: true },
        );

        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }

        res.status(200).json(updatedTodo);

    }catch (error) {
        console.error("Error in updateTodo:", error);
        res.status(500).json({ message: "server error"});
    }
};

export async function deleteTodo  (req, res) {
    try {
        const { id } = req.params;

        const deletedTodo = await Todo.findByIdAndDelete(id);

         if (!deletedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }   
        res.status(200).json(deletedTodo);
        
    }catch (error) {
        console.error("Error in deleteTodo:", error);
        res.status(500).json({ message: "server error"});
    }
};


