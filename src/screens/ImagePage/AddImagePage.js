import React from "react";
import { ScreenContainer } from "../FeedPage/styled";
import AddImageForm from "./AddImageForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddImagePage = (props) => {
    useProtectedPage();

  return (
    <ScreenContainer>
      <AddImageForm setButtonName={props.setButtonName} />
    </ScreenContainer>
  );
};

export default AddImagePage;