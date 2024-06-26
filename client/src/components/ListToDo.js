import React, { Fragment, useEffect, useState } from "react";

import EditToDo from "./EditToDo";



const ListToDo = () => {
    const [todos, setToDos] = useState([]);

    //delete todo function
    const deleteToDo = async (id) => {
        try {
            const deleteToDo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            });

            setToDos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };


    const getToDos = async () => {
        try {
            const response = await fetch("http://localhost:3000/todos");
            const jsonData = await response.json();
            setToDos(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getToDos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditToDo todo={todo }/></td>
                            <td>
                                <button className= "btn btn-danger" onClick={() => deleteToDo(todo.todo_id)}> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListToDo;
