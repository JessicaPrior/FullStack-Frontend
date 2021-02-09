import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ImageCardContent, ImageCardContainer } from "./styled";

const ImageCard = (props) => {
  return (
    <ImageCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt={"Foto"}
          height={"150px"}
          src={props.file}
        />
        <ImageCardContent>
          <Typography align={"center"}>{props.subtitle}</Typography>
        </ImageCardContent>
      </CardActionArea>
    </ImageCardContainer>
  );
};

export default ImageCard;
