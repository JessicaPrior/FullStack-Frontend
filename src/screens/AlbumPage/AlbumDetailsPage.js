import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import ImageCard from "../FeedPage/ImageCard";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { ItensContainer, AddImageButton } from "./styled";
import { goToAddItem, goToImage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";
import { useParams } from "react-router-dom";

const AlbumDetailsPage = () => {
    useProtectedPage();
    const { id } = useParams();
    const history = useHistory();
    const itensList = useRequestData([], `/album/${id}`)
    
    const renderItens = () => {

        return itensList.album && itensList.album.map((item) => {
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
        <>
            <ItensContainer>
                <p>Fotos do album</p>
                { itensList.album ? renderItens() : <Loading />}
            </ItensContainer>
            <AddImageButton color={"primary"} onClick={() => goToAddItem(history)}>
                <Add />
            </AddImageButton>
        </>
    );
};

export default AlbumDetailsPage;