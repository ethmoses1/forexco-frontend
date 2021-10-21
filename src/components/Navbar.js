import React from "react";
import logo from '../img/logo.png'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark " style={{paddingLeft: "5%", paddingRight: "10px", width: "100%"}}>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=> console.log("hi")}
        >
            <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand " href="/">
            <img src={logo} alt="Logo" class="rounded-circle"/>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create-article">
                Create article
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
