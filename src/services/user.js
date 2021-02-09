import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const login = (body, history, setButtonName) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
      setButtonName("Logout");
    })
    .catch((error) => {
      
      alert("Falha no Login, tente novamente");
    });
};

export const signUp = (body, history, setButtonName) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
      setButtonName("Logout");
    })
    .catch((error) => {
      alert("Falha no Cadastro, tente novamente");
    });
};
