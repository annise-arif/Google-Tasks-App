import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [todolist, setTodolist] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/todo")
    .then((res) => res.json())
    .then((data) => setTodolist(data));
  }, []);
    return (
        <div className="todo-list mt-5">
        <div class="card lg:w-96 mx-auto">
          <div class="card-body">
            <h2 class="card-title justify-center text-black mb-2 text-2xl font-bold mb-5">TO-DO LISTS</h2>
            {todolist.map(todo=><p className='content-center flex'><input type="checkbox" checked="checked" class="checkbox checkbox-sm" /> <input type="text" value={todo.todo} class="input input-bordered input-sm w-full max-w-xs mx-3" /><button className='btn btn-xs'>Edit</button></p>)}
          </div>
          
        </div>
      </div>
    );
};

export default Todo;