import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [todolist, setTodolist] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/todo")
    .then((res) => res.json())
    .then((data) => setTodolist(data));
  }, []);

  const handleTodo = (event) => {
    event.preventDefault();
    const todo = event.target.todo.value;
    const Todo = {
      todo,
    };
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast(`Completed adding TO-DO`);
        } else {
          toast.error(`adding error To-Do`);
        }
      });
    event.target.reset();
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title justify-center">Add a To do list</h2>
          <form onSubmit={handleTodo}>
            <input
              name="todo"
              type="text"
              placeholder="Type here"
              class="input input-bordered input-base-300 w-full max-w-xs"
            />
            <input
              class="btn btn-base-300 btn-sm mt-5"
              type="submit"
              value="Add Task"
            />
          </form>
        </div>
      </div>

      <div className="todo-list mt-5">
        <div class="card lg:w-96 mx-auto">
          <div class="card-body">
            <h2 class="card-title justify-center text-black mb-2 font-bold">TO-DO LISTS</h2>
            {todolist.map(todo=><p className="p-2 bg-slate-200 text-start rounded-md" key={todo._id}>{todo.todo}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
