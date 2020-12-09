import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const addImage = (body, history, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/image/create`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((response) => {
      setIsLoading(false);
      alert("Imagem adicionada com sucesso!");
      goToFeed(history);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      alert("Não foi possível adicionar a imagem, tente novamente");
    });
};
