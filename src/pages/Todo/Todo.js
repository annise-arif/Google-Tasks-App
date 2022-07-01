import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    fetch("https://honest-donair-81274.herokuapp.com/todo")
      .then((res) => res.json())
      .then((data) => setTodolist(data));
  }, [todolist]);

  const completedTodo = (todo) => {
    console.log(todo);
    const Todo = {
      todo,
    };

    fetch("https://honest-donair-81274.herokuapp.com/CompletedTodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        {
          todolist.map((stodo) => console.log(stodo));
        }
      });
  };

  const handleEdit = (todo) =>{
    console.log(todo.todo, todo._id)
  }
  return (
    <div className="todo-list mt-5">
      <div class="card lg:w-96 mx-auto">
        <div class="card-body">
          <h2 class="card-title justify-center text-black mb-2 text-2xl font-bold mb-5">
            TO-DO LISTS
          </h2>
          {todolist.map((todo) => (
            <p className="content-center flex">
              <input
                onClick={() => completedTodo(todo.todo)}
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-sm"
              />
              <input
                type="text"
                value={todo.todo}
                class="input input-bordered input-sm w-full max-w-xs mx-3"
              />
              <button onClick={()=>handleEdit(todo)} className="btn btn-xs">Edit</button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
