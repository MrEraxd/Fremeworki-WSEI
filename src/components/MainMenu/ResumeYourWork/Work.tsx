import styled from "styled-components";
import {ISingleUser} from "../../../entities/user";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IUsersReducer} from "../../../reducers/usersReducres";
import {IPhotoReducer} from "../../../reducers/photosReducer";

const Wrapper = styled.div`
  background-color: white;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0 3px 10px -5px rgba(0,0,0,0.56);
`

const WorkDesc = styled.div`
  margin-bottom: 24px;
  font-size: 0.9em;
`

const WorkBottomInfo = styled.div`
  font-size: 0.8em;
  & > * {
    margin-right: 8px;
  }
`

const WorkTitle = styled.div`
  font-size: 1.3em;
  color: #2A3F9D;
  margin-bottom: 16px;
`

const CustomImage = styled.img`
  height: 0.8em;
`

interface IWork {
    title: string;
    user: ISingleUser;
    body: string;
}



const Work = (props: IWork) => {

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    return (
        <Wrapper>
            <WorkTitle>{props?.title}</WorkTitle>
            <WorkDesc>{props?.body}</WorkDesc>
            <WorkBottomInfo>
                <CustomImage src={photos[props?.user?.id]?.thumbnailUrl}/>
                <span>{props?.user?.company.name}</span>

                <CustomImage src={"/media/icons/entities.png"}/>
                <span>Corporate</span>

                <span>Updated 3 days ago by John Doe</span>
            </WorkBottomInfo>
        </Wrapper>
    )
}

export default Work;