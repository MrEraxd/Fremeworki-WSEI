import {FC, MouseEvent} from "react";
import styled from "styled-components";
import {IWorkspaceInfo} from "../../../entities/workspace";
import {Link} from "react-router-dom"

const Wrapper = styled.div`
    flex-grow: 1;
    min-width: 300px;
    display: flex;
    height: 220px;
    flex-flow: column;
  box-shadow: 0px 3px 10px -5px rgba(0,0,0,0.56);
`;

const BackgroundImage = styled.img`
    height: 40%;
    width: 100%;
    background-color: red;
  border-radius: 8px 8px 0 0 ;
`;

const Desc = styled.div`
    display: flex;
    flex-flow: column;
    background-color: white;
    flex-grow: 1;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  
  & > div > * {
    margin-right: 8px;
  }
`;

const TitleWithImageWrapper = styled.div`
    flex-grow: 1;
  padding-left: 92px;
  padding-top: 8px;
  position: relative;
`

const CustomImage = styled.img`
  height: 80px;
  width: 80px;
  position: absolute;
  left: 0;
  background-color: olivedrab;
  top: -30px;
`

const UpdateTime = styled.div`
  font-size: 0.7em;
  margin-top: 12px;
`

const CustomIcon = styled.img`
  height: 0.8em;
`

const Title = styled.div`
  font-weight: bold;
`

interface IExtendedWorkspaceInfo extends IWorkspaceInfo{
    backgroundImgUrl: string;
    iconImgUrl: string;
}

const changeActualStorage = (JSONString: string) => {
    console.log(JSONString)
    localStorage.setItem("actualWorkspace", JSONString)
}

const Workspace = (props: IExtendedWorkspaceInfo) => {

    const JSONObj = {
        title: props.title,
        body: props.body,
        iconImgUrl: props.iconImgUrl
    }

    return (
        <Link to={"/workspace"} onClick={() => changeActualStorage(JSON.stringify(JSONObj))}>
            <Wrapper>
                <BackgroundImage src={props.backgroundImgUrl}/>
                <Desc>
                    <TitleWithImageWrapper>
                        <CustomImage src={props.iconImgUrl}/>
                        <Title>{props.title?.substring(1, 16)}</Title>
                    </TitleWithImageWrapper>
                    <div>
                        <CustomIcon src={"./media/icons/privacy.png"}/>
                        <span>{props.body?.substring(1, 10)}</span>
                        <CustomIcon src={"./media/icons/people.png"}/>
                        <span>150 users</span>
                    </div>
                    <UpdateTime>Last updated 2 days ago</UpdateTime>
                </Desc>
            </Wrapper>
        </Link>
    )
}

export default Workspace;