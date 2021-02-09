import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, AddItemFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addItem } from "../../services/item";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddItemForm = (props) => {
    const history = useHistory();
    const [form, handleInputChange, resetState] = useForm({
        image_id: "",
        album_id: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const onClickAddItem = (event) => {
        
        event.preventDefault();
        const element = document.getElementById("additem_form");
        element.reportValidity();
        if (form) {
           
            addItem(form, history, setIsLoading);
            resetState();
        }
    };

    return (
        <form id={"additemform"}>
            <AddItemFormContainer>
                <p>Peencha as informações a baixo para adicionar uma foto ao album</p>
                <InputsContainer>
                    <TextField
                        value={form.image_id}
                        name={"image_id"}
                        onChange={handleInputChange}
                        label={"Id da Imagem"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <TextField
                        value={form.album_id}
                        name={"album_id"}
                        onChange={handleInputChange}
                        label={"Id do Album"}
                        variant={"outlined"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
                </InputsContainer>
                <Button
                    onClick={onClickAddItem}
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                    margin={"normal"}
                >
                    {isLoading ? (
                        <CircularProgress color={"inherit"} size={24} />
                    ) : (
                            <>Adicionar Foto</>
                        )}
                </Button>
            </AddItemFormContainer>
        </form>
    );
};

export default AddItemForm;
