import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddAlbumFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  p{
    font-family: "nova slim";
  }
`;

export const AddItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  p{
    font-family: "nova slim";
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

export const AlbunsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  p{
    text-align: center;
    font-family: "nova slim";
    font-size: 4vh;
  }
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`;

export const AddAlbumButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;

export const AddImageButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;