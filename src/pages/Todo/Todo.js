import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    fetch("https://honest-donair-81274.herokuapp.com/todo")
      .then((res) => res.json())
      .then((data) => setTodolist(data));
  }, [todolist]);

  const completedTodo = (todo) => {
    console.log(todo);
    const Todo = {
      todo: todo.todo,
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
        fetch(`https://honest-donair-81274.herokuapp.com/todo/${todo._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      });
  };

  const handleEdit = (todo) => {
    setText(todo.todo);
    setTodoId(todo._id);
    console.log(todo._id);
  };

  const editedValue = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const updateTodo = (id) => {
    const Text = {
      text: text,
    };
    console.log(id, text);
    fetch(`https://honest-donair-81274.herokuapp.com/uptodo/${id}`, {
      method: "PUT",
      body: JSON.stringify(Text),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="todo-list mt-5">
      <div className="card lg:w-96 mx-auto">
        <div className="card-body">
          <h2 className="card-title justify-center text-black mb-2 text-2xl font-bold mb-5">
            TO-DO LISTS
          </h2>

          <div className="mt-4">
            {todoId ? (
              <>
                <h5 className="font-bold text-1xl">Edit</h5>
                <p className="content-center flex mt-3">
                  <input
                    onChange={editedValue}
                    className="input input-bordered input-sm w-full mx-3"
                    value={text}
                  />
                  <input
                    onClick={() => updateTodo(todoId)}
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-primary mt-1 mb-6"
                  />
                </p>
              </>
            ) : (
              <></>
            )}
            <h1>Latest</h1>
            <hr />
            <div className="mb-16">
            {todolist.map((todo) => (
              <div>
                <p className="content-center flex mt-6">
                  <input
                    onClick={() => completedTodo(todo)}
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-sm mt-1 checkbox-accent"
                  />
                  <input
                    type="text"
                    value={todo.todo}
                    className="input input-bordered input-sm w-full max-w-xs mx-3 bg-gray-200"
                  />
                  <button
                    onClick={() => handleEdit(todo)}
                    className="mt-1 btn btn-xs"
                  >
                    Edit
                  </button>
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
