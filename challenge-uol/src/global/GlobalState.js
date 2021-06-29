import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

const GlobalState = (props) => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [data, setData] = useState([]);
  const [starred, setStarred] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [nameRequests, setNameRequests] = useState("");

  const getUserInfo = () => {
    setNameRequests(userName);
    axios.get(`${baseUrl}/users/${userName}`).then((res) => {
      setName(res.data.name);
      setAvatar(res.data.avatar_url);
      setBio(res.data.bio);
      setIsUser(true);
    });
    setUserName("");
  };

  useEffect(() => {
    setData([]);
    setStarred([]);
  }, [name]);

  const getRepos = () => {
    axios.get(`${baseUrl}/users/${nameRequests}/repos`).then((res) => {
      setData(res.data);
    });
  };

  const getStarred = () => {
    axios.get(`${baseUrl}/users/${nameRequests}/starred`).then((res) => {
      setStarred(res.data);
    });
  };

  const states = { name, avatar, bio, data, starred, userName, isUser };
  const setters = {
    setName,
    setAvatar,
    setBio,
    setData,
    setStarred,
    setUserName,
  };
  const requests = { getUserInfo, getRepos, getStarred };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
