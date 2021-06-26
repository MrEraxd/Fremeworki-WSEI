import React from "react";
import styled from "styled-components";
import Workspace from "./Workspace";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IWorkspaceReducer} from "../../../reducers/workspacesReducer";
import {IPhotoReducer} from "../../../reducers/photosReducer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Wrapper = styled.div`
  margin-bottom: 24px;
  padding-bottom: 12px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: row;
  grid-gap: 24px;
`

const Workspaces = () => {
    const { workspaces } = useSelector<IState, IWorkspaceReducer>(state => ({
        ...state.workspaces
    }))

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    let items = [];

    for(let i = 0; i < 4; i++){
        items.push(<SwiperSlide><Workspace
            title={workspaces[i]?.title}
            body={workspaces[i]?.body}
            id={workspaces[i]?.id}
            userId={workspaces[i]?.userId}
            iconImgUrl={photos[workspaces[i]?.id]?.url}
            backgroundImgUrl={photos[workspaces[i]?.id * 8]?.url}
        /></SwiperSlide>)
    }

    return (
        <Wrapper>
            <h2 style={{marginBottom: "16px"}}>Workspaces</h2>
            <InnerWrapper>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {items}
                </Swiper>

            </InnerWrapper>
        </Wrapper>
    )
};

export default Workspaces;