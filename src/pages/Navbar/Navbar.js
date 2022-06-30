import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="navbar bg-base-300 text-black">
      <div class="navbar-start container">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/completedtask">Completed Tasks</Link>
            </li>
            <li tabindex="0">
              <Link to="/todo">To Do</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Google Tasks App</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/completedtask">Completed Tasks</Link>
          </li>
          <li tabindex="0">
          <Link to="/todo">To Do</Link>
          </li>
          <li>
          <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
