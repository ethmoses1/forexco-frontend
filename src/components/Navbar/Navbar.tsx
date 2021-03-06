import React, { FC, useContext, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Context } from "../../Store";
import logo from "../../img/logo.png";

const Header: FC = () => {
  const { data } = useContext(Context);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    data && setAmount(data.getPosts.length);
  }, [data]);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark "
        style={{
          paddingLeft: "5%",
          paddingRight: "10px",
          width: "100%",
          position: "fixed",
          marginTop: "-5vh",
          backgroundColor: "solid black",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand " href="/">
          <img src={logo} alt="Logo" className="rounded-circle" />
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link ml-auto" href="/create-article">
                Create article
              </a>
            </li>
          </ul>
        </div>
        <p
          className="navbar-brand"
          style={{ fontSize: "13px", margin: "auto" }}
        >
          Number of articles in database:{" "}
          {amount ? (
            amount
          ) : (
            <CircularProgress
              style={{ width: "20px", height: "20px", color: "white" }}
            />
          )}
        </p>
      </nav>
      <nav></nav>
    </div>
  );
};
export default Header;
