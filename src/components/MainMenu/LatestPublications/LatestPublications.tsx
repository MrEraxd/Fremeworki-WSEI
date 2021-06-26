import React, {FC} from "react";
import styled from "styled-components";
import Publication from "./Publication";
import { useSelector } from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IPublicationReducer} from "../../../reducers/publicationsReducer";
import {IUsersReducer} from "../../../reducers/usersReducres";
import { Link } from "react-router-dom";
import {IPhotoReducer} from "../../../reducers/photosReducer";

const Wrapper = styled.div`
    margin-bottom: 24px;
    display: flex;
    background-color: white;
    border-radius: 8px;
  box-shadow: 0 3px 10px -5px rgba(0,0,0,0.56);
`;

const ThumbnailWrapper = styled.div`
    max-width: 320px;
    display: flex;
    border-radius: 8px 0 0 8px;
`;

const Thumbnail = styled.div`
    align-self: flex-end;
    padding: 8px;
    color: white;
`

const ThumbnailText = styled.div`
  margin-bottom: 6px;
`

const ThumbnailInfo = styled.div`
  font-weight: 300;
`

const PublicationsWrapper = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-flow: column;
`

const PublicationsInnerWrapper = styled.div`
  flex-grow: 1;
`

const LatestPublications: FC = () => {

    const { publications } = useSelector<IState, IPublicationReducer>(state => ({
        ...state.publications
    }))

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    let publicationsToDisplay = [];

    for(let i = 0; i < 3; i++){
        publicationsToDisplay.push(
            <Publication
                key={i + "Publication"}
                title={publications[i * 10]?.title}
                username={usersList[publications[i * 10]?.userId]?.username}
                imgUrl={photos[publications[i * 10]?.userId]?.url}
            />
        )
    }

    return (
        <Wrapper>
            <ThumbnailWrapper style={{backgroundImage: "url('/media/london-3930011_960_720.jpg')"}}>
                <Thumbnail>
                    <ThumbnailText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut egestas aliquet velit, non cursus massa dignissim eget.
                        Sed blandit vel ex non sodales.
                    </ThumbnailText>

                    <ThumbnailInfo>
                        <span>7 Jan 2020</span>
                        <img src={"/media/icons/people.png"} alt={"people"}/>
                        <span>John Doe</span>
                    </ThumbnailInfo>
                </Thumbnail>
            </ThumbnailWrapper>

            <PublicationsWrapper>
                <h4 style={{marginBottom: "16px"}}>Latest publications</h4>

                <PublicationsInnerWrapper>
                    { publicationsToDisplay }
                </PublicationsInnerWrapper>

                <Link to={"/mock"}>See more publications</Link>
            </PublicationsWrapper>
        </Wrapper>
    );
}

export default LatestPublications;