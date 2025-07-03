import React from "react";

function TodoList() {
    const todos = ['Learn React', 'Do Homework', 'Sleep']
    return (
        <ul>
            {todos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default TodoList;