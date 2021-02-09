export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToAddImage = (history) => {
  history.push("/image/create");
};

export const goToImage = (history, id) => {
  history.push(`/image/${id}`);
};

export const goToAddAlbum = (history) => {
  history.push("/album/create");
};

export const goToAlbum = (history) => {
  history.push(`/album`);
};

export const goToAlbumDetails = (history, id) => {
  history.push(`/album/${id}`);
};