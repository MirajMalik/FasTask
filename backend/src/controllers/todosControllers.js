export const getTodos = (req, res) => {
    res.status(200).send("you fetched data from server");
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


