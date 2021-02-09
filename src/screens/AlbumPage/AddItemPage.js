import React from "react";
import { ScreenContainer } from "../FeedPage/styled";
import AddItemForm from "./AddItemForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddItemPage = (props) => {
    useProtectedPage();

  return (
    <ScreenContainer>
      <AddItemForm setButtonName={props.setButtonName} />
    </ScreenContainer>
  );
};

export default AddItemPage;