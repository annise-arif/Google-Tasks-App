import React, { useEffect, useState } from "react";

const CompletedTask = () => {
  const [ctodo, setCtodo] = useState([]);

  useEffect(() => {
    fetch("https://honest-donair-81274.herokuapp.com/CompletedTodo")
      .then((res) => res.json())
      .then((data) => setCtodo(data));
  }, [ctodo]);

  const deleteTodo = (id) => {
    console.log(id);
    fetch(`https://honest-donair-81274.herokuapp.com/allTodo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="todo-list my-5 pb-9">
        <div className="card lg:w-96 mx-auto">
          <div className="card-body">
            <h2 className="card-title justify-center text-black mb-2 font-bold">
              Completed To-Do
            </h2>
            <hr />
            <div className="mt-4">
              {ctodo.map((todo) => (
                <p className="content-center flex mt-3">
                  <input
                    type="text"
                    value={todo.todo}
                    className="input input-bordered input-sm w-full max-w-xs mx-3 bg-gray-200"
                  />
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="mt-1 btn btn-xs bg-red-500"
                  >
                    Delete
                  </button>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
