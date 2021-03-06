import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import ImageCard from "./ImageCard";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { AddImageButton, FeedContainer } from "./styled";
import { goToAddImage, goToImage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";

const FeedPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const history = useHistory();
  const imageList = useRequestData([], `/image/all`);


  const renderFeed = () => {
    return imageList.length > 0 && imageList.map((item) => {
      return (
        <div key={item.image_id}>
          <ImageCard
            onClick={() => goToImage(history, item.id)}
            subtitle={item.subtitle}
            author={item.author}
            date={item.date}
            file={item.file}
            tags={item.tags}
            collection={item.collection}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <FeedContainer>
        <p>Fotos</p>
        <div>{imageList && imageList.length > 0 ? renderFeed() : <Loading />}</div>
      </FeedContainer>
      <AddImageButton color={"primary"} onClick={() => goToAddImage(history)}>
        <Add />
      </AddImageButton>
    </div>
  );
};

export default FeedPage;
