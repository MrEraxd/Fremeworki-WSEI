import {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    min-width: 300px;
    display: flex;
    height: 220px;
    flex-flow: column;
  box-shadow: 0px 3px 10px -5px rgba(0,0,0,0.56);
`;

const BackgroundImage = styled.div`
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

const CustomImage = styled.div`
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

const Workspace: FC = () => {
    return (
        <Wrapper>
            <BackgroundImage/>
            <Desc>
                <TitleWithImageWrapper>
                    <CustomImage></CustomImage>
                    <Title>Client contract</Title>
                </TitleWithImageWrapper>
                <div>
                    <CustomIcon src={"./media/icons/privacy.png"}/>
                    <span>Contract</span>
                    <CustomIcon src={"./media/icons/people.png"}/>
                    <span>150 users</span>
                </div>
                <UpdateTime>Last updated 2 days ago</UpdateTime>
            </Desc>
        </Wrapper>
    )
}

export default Workspace;