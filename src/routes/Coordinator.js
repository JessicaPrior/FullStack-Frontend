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
