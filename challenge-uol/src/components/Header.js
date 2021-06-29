import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import GlobalStateContext from "../global/GlobalStateContext";

const Header = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const onChangeSearch = (e) => {
    setters.setUserName(e.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#" style={{ fontSize: "1.8em" }}>
          Challenge UOL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              value={states.userName}
              type="search"
              placeholder="Username"
              className="mr-2"
              aria-label="Username"
              onChange={onChangeSearch}
            />
            <Button onClick={requests.getUserInfo} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
