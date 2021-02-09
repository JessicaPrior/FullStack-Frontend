import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddAlbumFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addAlbum } from "../../services/album";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddAlbumForm = (props) => {
  const history = useHistory();
  const [form, handleInputChange, resetState] = useForm({
    title: "",
    subtitle: "",
    image: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const onClickAddAlbum = (event) => {
    resetState();
    event.preventDefault();
    const element = document.getElementById("addalbum_form");
    const isValid = element.checkValidity();
    element.reportValidity();
    if (isValid) {
      addAlbum(form, history, setIsLoading);
    }
  };

  return (
    <form id={"addalbum_form"}>
      <AddAlbumFormContainer>
        <p>Peencha as informações a baixo para criar o album</p>
        <InputsContainer>
          <TextField
            value={form.title}
            name={"title"}
            onChange={handleInputChange}
            label={"Titulo"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.subtitle}
            name={"subtitle"}
            onChange={handleInputChange}
            label={"Subtitulo"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.image}
            name={"image"}
            onChange={handleInputChange}
            label={"Imagem"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          onClick={onClickAddAlbum}
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
          margin={"normal"}
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
              <>Adicionar Album</>
            )}
        </Button>
      </AddAlbumFormContainer>
    </form>
  );
};

export default AddAlbumForm;
