import React from "react";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./css/Menu.css";
import Logo from "../../assets/img/logo.png"
const Menu = () => {
  return (
    <Col
      lg={"2"}
      md={"2"}
      className="d-flex flex-column justify-content-between"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-center">
        <img
          src={Logo}
          alt="Logo"
          style={{width:"100%"}}
        />
      </div>
      <div className="d-flex flex-column justify-content-between">
        <ul>
          <li className="nav_item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                fill="#292D32"
              />
              <path
                d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                fill="#292D32"
              />
              <path
                d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                fill="#292D32"
              />
              <path
                d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                fill="#292D32"
              />
            </svg>

            <a href="#" className="nav_item_link">
              Dashboard
            </a>
          </li>
          <li className="nav_item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.41 22C3.41 18.13 7.26 15 12 15C12.96 15 13.89 15.13 14.76 15.37M12 12C13.3261 12 14.5979 11.4732 15.5355 10.5355C16.4732 9.59785 17 8.32608 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2C10.6739 2 9.40215 2.52678 8.46447 3.46447C7.52679 4.40215 7 5.67392 7 7C7 8.32608 7.52679 9.59785 8.46447 10.5355C9.40215 11.4732 10.6739 12 12 12Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.49 17.98H16.51M18 16.52V19.51M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C21.0675 20.6525 20.5667 21.143 19.967 21.4831C19.3674 21.8233 18.6894 22.0014 18 22C17.0155 22.0029 16.0659 21.6352 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.1993 19.4404 13.9985 18.7272 14 18C13.9994 17.4745 14.1024 16.9541 14.3031 16.4685C14.5039 15.9829 14.7985 15.5417 15.1701 15.1701C15.5417 14.7985 15.9829 14.5039 16.4685 14.3031C16.9541 14.1024 17.4745 13.9993 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <a href="#" className="nav_item_link">
              User
            </a>
          </li>
        </ul>
      </div>
      <Button>Log out</Button>
    </Col>
  );
};

export default Menu;
