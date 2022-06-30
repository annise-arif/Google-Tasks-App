import React from "react";

const Home = () => {
    const handleTodo = (event) =>{
        event.preventDefault();
        const todo = event.target.todo.value;
        console.log(todo);
        event.target.reset();
    }
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <div class="card-body">
        <h2 class="card-title justify-center">Add a To do list</h2>
        <form
            onSubmit={handleTodo}>
          <input
            name="todo"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-base-300 w-full max-w-xs"
          />
          <input
            class="btn btn-base-300 btn-sm mt-5"
            type="submit"
            value="Add TO-DO"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
