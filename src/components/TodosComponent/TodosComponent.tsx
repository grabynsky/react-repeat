import {useEffect, useState} from "react";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import type {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/todo.service.ts";


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos()
            .then(response => setTodos(response))

    })
    return (
        <div>
            {

                todos.map(todo=> <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;