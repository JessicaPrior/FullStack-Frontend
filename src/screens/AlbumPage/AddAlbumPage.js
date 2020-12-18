import React from "react";
import { ScreenContainer } from "../FeedPage/styled";
import AddAlbumForm from "./AddAlbumForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddAlbumPage = (props) => {
    useProtectedPage();

  return (
    <ScreenContainer>
      <AddAlbumForm setButtonName={props.setButtonName} />
    </ScreenContainer>
  );
};

export default AddAlbumPage;