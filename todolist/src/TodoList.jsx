import { useState } from "react";
import { v4 as uuid } from 'uuid';
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useEffect } from "react";
const initialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return [];
    return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(initialData);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter(t => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo
                }
            })
        })
    }
    const addTodo = (text) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: text, id: uuid(), completed: false }]
        })
    }
    return (
        <div>
            <List sx={{
                width: '100%', maxWidth: 360, bgcolor: 'background.paper',

            }}>
                {todos.map((todo) => {
                    return <TodoItem todo={todo}
                        key={todo.id}
                        removeTodo={() => removeTodo(todo.id)}
                        toggle={() => { toggleTodo(todo.id) }} />

                })}
            </List>
            <TodoForm addTodo={addTodo} />
        </div>
    )
}



