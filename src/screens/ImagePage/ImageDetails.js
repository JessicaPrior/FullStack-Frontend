import React from "react";
import Loading from "../../components/Loading/Loading";
import useRequestData from "../../hooks/useRequestData";
import Typography from "@material-ui/core/Typography";
import useProtectedPage from "../../hooks/useProtectedPage";
import { DetailContainer, ScreenContainer } from "./styled";
import { useParams } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";


const ImageDetails = () => {
  useProtectedPage();
  const { id } = useParams();
  const image = useRequestData([], `/image/${id}`)
  
  const renderDetail = () => (
    <ScreenContainer>
      <DetailContainer>
        <Typography
          gutterBottom
          align={"center"}
          variant={"h5"}
          color={"primary"}
          margin={"200px"}
        >
          <CardMedia
            component={"img"}
            alt={"Foto"}
            height={"340vh"}
            width={"400vw"}
            src={image.file}
          />
          <p>{image.subtitle}</p>
        </Typography>

        <Typography align={"center"}>
          <p>Id do Autor: {image.author}</p>
          <p>Data: {image.date}</p>
          <p>{image.tags}</p>
          <p>{image.collection}</p>
          <p>Nome do Autor: {image.author_name}</p>
        </Typography>
      </DetailContainer>
    </ScreenContainer>
  );

  return <> {image ? renderDetail() : <Loading />}</>;
};

export default ImageDetails;