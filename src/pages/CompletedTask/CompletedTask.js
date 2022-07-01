import React, { useEffect, useState } from "react";

const CompletedTask = () => {
  const [ctodo, setCtodo] = useState([]);

  useEffect(() => {
    fetch("https://honest-donair-81274.herokuapp.com/CompletedTodo")
      .then((res) => res.json())
      .then((data) => setCtodo(data));
  }, [ctodo]);
  return (
    <div>
      <div className="todo-list my-5 pb-9">
        <div class="card lg:w-96 mx-auto">
          <div class="card-body">
            <h2 class="card-title justify-center text-black mb-2 font-bold">
              Completed To-Do
            </h2>
            {ctodo.map((todo) => (
              <p
                className="p-2 bg-slate-200 text-start rounded-md"
                key={todo._id}
              >
                {todo.todo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
