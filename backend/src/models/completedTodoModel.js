import mongoose from 'mongoose';

const completedTodoSchema = new mongoose.Schema({
    id: {
        type: String,   
        required: true,
    },
    title: {    
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const CompletedTodo = mongoose.model('CompletedTodo', completedTodoSchema);

export default CompletedTodo;
