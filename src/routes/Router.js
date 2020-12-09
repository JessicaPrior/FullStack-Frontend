import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../screens/LoginPage/LoginPage";
import SignUpPage from "../screens/SignUpPage/SignUpPage";
import FeedPage from "../screens/FeedPage/FeedPage";
import ImageDetails from "../screens/ImagePage/ImageDetails";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import AddImagePage from "../screens/ImagePage/AddImagePage";

const Router = (props) => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage setButtonName={props.setButtonName} />
      </Route>
      <Route exact path={"/signup"}>
        <SignUpPage setButtonName={props.setButtonName} />
      </Route>
      <Route exact path={["/feed", "/"]}>
        <FeedPage />
      </Route>
      <Route exact path={"/image/create"}>
        <AddImagePage setButtonName={props.setButtonName}/>
      </Route>
      <Route exact path={"/image/:id"}>
        <ImageDetails />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
