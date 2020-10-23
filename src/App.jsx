import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./index.css";

import Sidebar from './components/SideBar'
import Header from './components/Header';
import ToDo from './Container/ToDo'
import Favorite from "./Container/Favorites";

import {AppStyles, MainContainer, ContentContainer} from "./AppStyles.styles.tw";
import { ModalProvider } from "./components/Modal/context";
import CreateTask from "./components/CreateTask";

const App = () => {
  return (
    <ModalProvider>
      <AppStyles>
        <MainContainer>
          <CreateTask />
          <Router>
            <Sidebar />
            <ContentContainer>
              <Header />
              <Switch>
                <Route exact path="/">
                  <ToDo />
                </Route>
                <Route path="/favorites">
                  <Favorite />
                </Route>
              </Switch>
            </ContentContainer>
          </Router>
        </MainContainer>
      </AppStyles>
    </ModalProvider>
  );
};

export default App;
