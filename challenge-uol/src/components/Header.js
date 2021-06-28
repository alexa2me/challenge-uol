import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { baseUrl } from "../constants/baseUrl";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [data, setData] = useState([]);
  const [starred, setStarred] = useState([]);

  const handleSubmit = () => {
    axios.get(`${baseUrl}/users/${userName}`).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setAvatar(res.data.avatar_url);
      setBio(res.data.bio);
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const getRepos = () => {
    axios.get(`${baseUrl}/users/${userName}/repos`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getRepos();
  }, []);

  const getStarred = () => {
    axios.get(`${baseUrl}/users/${userName}/starred`).then((res) => {
      setStarred(res.data);
    });
  };

  useEffect(() => {
    getStarred();
  }, []);

  const onChangeSubmit = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Challenge UOL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Username"
              className="mr-2"
              aria-label="Username"
              onChange={onChangeSubmit}
            />
            <Button onClick={handleSubmit} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div
        class="card-group"
        style={{ width: "100vw", textAlign: "center", minHeight: "85vh" }}
      >
        <Card style={{ width: "100vw", textAlign: "center" }}>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{bio}</Card.Text>
            <div className="d-flex justify-content-around">
              <Button onClick={getRepos} variant="primary">
                Repos
              </Button>
              <Button onClick={getStarred} variant="primary">
                Starred
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "100vw", textAlign: "center" }}>
          <Card.Body>
            <Card.Title>Repos</Card.Title>
            <Card.Text>
              {data &&
                data.map((item) => {
                  return (
                    <p>
                      <a href={item.html_url}>{item.name}</a>
                    </p>
                  );
                })}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "100vw", textAlign: "center" }}>
          <Card.Body>
            <Card.Title>Starred</Card.Title>
            <Card.Text>
              {starred &&
                starred.map((item) => {
                  return (
                    <p>
                      <a href={item.html_url}>{item.name}</a>
                    </p>
                  );
                })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Header;
