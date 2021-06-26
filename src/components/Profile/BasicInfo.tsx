import React, {FC} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../../reducers/reducers";
import {IUsersReducer} from "../../reducers/usersReducres";
import {IPhotoReducer} from "../../reducers/photosReducer";

const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px 16px 0;
  border-bottom: 1px solid #E8E8E8;
  margin-bottom: 16px;
`

const ProfilePicture = styled.img`
  height: 100px;
`

const InnerWrapper = styled.div`
    margin-left: 16px;
  
  & > div {
    margin-top: 8px;
  }
`

const Bold = styled.div`
    font-weight: bold;
`

const BasicInfo: FC = () => {

    const { loggedUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    return (
        <Wrapper>
            <ProfilePicture src={photos[loggedUser.id]?.thumbnailUrl} alt={"Profile photo"}/>

            <InnerWrapper>
                <Bold>{loggedUser.name}</Bold>
                <Bold>{loggedUser.company.name}</Bold>
                <div style={{display: "flex"}}>
                    <span>{loggedUser.address.city}</span>
                    <span style={{marginLeft: "auto"}}>{loggedUser.email}</span>
                </div>
                <div style={{display: "flex"}}>
                    <span>{loggedUser.company.bs}</span>
                    <span style={{marginLeft: "auto", paddingLeft: "16px"}}>{loggedUser.phone}</span>
                </div>
            </InnerWrapper>
        </Wrapper>
    )
}

export default BasicInfo;