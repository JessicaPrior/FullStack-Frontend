import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddImageFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addImage } from "../../services/image";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddImageForm = (props) => {
  const history = useHistory();
  const [form, handleInputChange, resetState ]= useForm({
    subtitle: "",
    file: "",
    tags: "",
    collection: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const onClickAddImage = (event) => {
    resetState();
    event.preventDefault();
    const element = document.getElementById("addimage_form");
    const isValid = element.checkValidity();
    element.reportValidity();
    if (isValid) {
      addImage(form, history, setIsLoading);
    }
  };

  return (
    <form id={"addimage_form"}>
      <AddImageFormContainer>
        <InputsContainer>
          <TextField
            value={form.subtitle}
            name={"subtitle"}
            onChange={handleInputChange}
            label={"Subtitulo"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.file}
            name={"file"}
            onChange={handleInputChange}
            label={"Arquivo"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.image}
            name={"tags"}
            onChange={handleInputChange}
            label={"Tags"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.image}
            name={"collection"}
            onChange={handleInputChange}
            label={"collection"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          onClick={onClickAddImage}
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
          margin={"normal"}
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Adicionar Imagem</>
          )}
        </Button>
      </AddImageFormContainer>
    </form>
  );
};

export default AddImageForm;
