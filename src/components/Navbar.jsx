import React from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>{
  return (<div><nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/" >BLINK News</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/business" >Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/entertainment" text-white>Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/health" text-white>Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/science" text-white>Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/sports" text-white>Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/technology" text-white>Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav></div>
  )
}