import React, {FC, useEffect, useState} from "react";
import TopNav from "../TopNav/TopNav";
import LeftMenu from "../LeftMenu/LeftMenu";
import MainMenu from "../MainMenu/MainMenu";
import Profile from "../Profile/Profile";
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getLoggedUser, getUsers} from "../../actions/usersActions";
import {getPublications} from "../../actions/publicationsActions";
import {getComments} from "../../actions/commentsActions";
import {getPhotos} from "../../actions/photosActions";
import Workspace from "../Workspace/Workspace";
import Mock from "../Mock/Mock";
import {getWorkspaces} from "../../actions/workspacesActions";
import Entities from "../Entities/Entities";

type GetUsers = ReturnType<typeof getUsers>
type GetLoggedUser = ReturnType<typeof getLoggedUser>
type GetPublications = ReturnType<typeof getPublications>
type GetComments = ReturnType<typeof getComments>
type GetPhotos = ReturnType<typeof getPhotos>
type GetWorkspaces = ReturnType<typeof getWorkspaces>

const Wrapper = styled.section`
`

const MainContentWrapper = styled.div`
  width: calc(100% - 200px);
  padding-left: 32px;
  margin-top: 16px;
`

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`

export interface ActualWorkspaceInfo {
    iconURL: string;
    title: string;
    body: string;
}


const MainWrapper: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetLoggedUser>(getLoggedUser());
        dispatch<GetPublications>(getPublications());
        dispatch<GetComments>(getComments());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetWorkspaces>(getWorkspaces());
    }, []);

    return (
        <Router>
            <Wrapper>
                <TopNav />
                <Content>
                    <LeftMenu />
                    <MainContentWrapper>
                        <Switch>
                            <Route path='/entities'>
                                <Entities />
                            </Route>

                            <Route path='/profile'>
                                <Profile />
                            </Route>

                            <Route path='/workspace'>
                                <Workspace/>
                            </Route>

                            <Route path='/mock'>
                                <Mock />
                            </Route>

                            <Route path='/'>
                                <MainMenu/>
                            </Route>
                        </Switch>
                    </MainContentWrapper>
                </Content>
            </Wrapper>
        </Router>
    )
}

export default MainWrapper;