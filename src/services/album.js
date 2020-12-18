import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const addAlbum = (body, history, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/album/create`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((response) => {
      setIsLoading(false);
      alert("Album adicionado com sucesso!");
      goToFeed(history);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
      alert("Não foi possível adicionar o album, tente novamente");
    });
};