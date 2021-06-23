import React, {FC} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {IState} from "../../reducers/reducers";
import {IUsersReducer} from "../../reducers/usersReducres";
import {IPhotoReducer} from "../../reducers/photosReducer";

const ShortProfileWrapper = styled.div`
  text-align: center;
  background-color: white;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 3px 10px -5px rgba(0,0,0,0.56);
`

const ProfileButtonsWrapper = styled.div`
  padding: 16px;
`

const ProfileInfo = styled.div`
  padding: 32px;
  border-bottom: 1px solid #E8E8E8;
  margin-bottom: 8px;
`

const Picture = styled.img`
  height: 64px;
  border-radius: 16px;
`

const Name = styled.div`
  color: cornflowerblue;
  margin-top: 12px;
`

const JobTitle = styled.div`
  color: gray;
  margin-top: 6px;
`

const ProfileRowIcon = styled.img`
  height: 100%;
`

const ProfileRowButton = styled.img`
  height: calc(100% - 6px);
  padding: 3px 6px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-left: auto;
  
  &:hover {
    cursor: pointer;
  }
`

const ProfileRowWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ProfileRowText = styled.span`
  padding-left: 12px;
`

const ShortProfile: FC = () => {
    const { loggedUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    return (
        <ShortProfileWrapper>
            <Link to="/profile">
                <ProfileInfo>
                    <Picture src={photos[loggedUser.id]?.thumbnailUrl} alt={"Profile pic"} />
                    <Name>{loggedUser.name}</Name>
                    <JobTitle>{loggedUser.company.bs}</JobTitle>
                </ProfileInfo>
            </Link>
            <ProfileButtonsWrapper>
                <Link to="/mock">
                    <ProfileRowWrapper style={{marginBottom: '16px'}}>
                        <ProfileRowIcon src="./media/icons/network.png" alt="Network.png"/>
                        <ProfileRowText>Your network</ProfileRowText>
                        <ProfileRowButton src="./media/icons/user-plus.png" alt="UserPlus.png"/>
                    </ProfileRowWrapper>
                </Link>

                <Link to="/mock">
                    <ProfileRowWrapper>
                        <ProfileRowIcon src="./media/icons/publications.png" alt="Logo.png"/>
                        <ProfileRowText>Your Publications</ProfileRowText>
                        <ProfileRowButton src="./media/icons/plus.png" alt="Plus.png"/>
                    </ProfileRowWrapper>
                </Link>
            </ProfileButtonsWrapper>
        </ShortProfileWrapper>
    )
}

export default ShortProfile;