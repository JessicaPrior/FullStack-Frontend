import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import ImageCard from "../FeedPage/ImageCard";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { AlbunsContainer, AddAlbumButton } from "./styled";
import { goToAddAlbum, goToAlbumDetails } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";

const AlbumPage = () => {
    useProtectedPage();

    const history = useHistory();
    const albumList = useRequestData([], `/album/all`)
    const renderAlbuns = () => {
        return albumList.length > 0 && albumList.map((item) => {
            return (
                <div key={item.album_id}>

                    <ImageCard
                        onClick={() => goToAlbumDetails(history, item.id)}
                        title={item.title}
                        subtitle={item.subtitle}
                        file={item.image}
                    />
                </div>
            );
        });
    };

    return (
        <>
            <AlbunsContainer>
                <p>Albuns</p>
                <div>
                    {albumList && albumList.length > 0 ? renderAlbuns() : <Loading />}
                </div>
            </AlbunsContainer>
            <AddAlbumButton color={"primary"} onClick={() => goToAddAlbum(history)}>
                <Add />
            </AddAlbumButton>
        </>
    );
};

export default AlbumPage;
