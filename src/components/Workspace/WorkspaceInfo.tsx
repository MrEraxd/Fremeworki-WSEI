import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 32px;
`

const BackgroundPicture = styled.div`
    height: 130px;
    width: 100%;
  background-image: url("./media/london-3930011_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0 0;
`

const DescriptionImg = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 16px;
`

const SettingsButton = styled.img`
  margin-left: auto;
`

const DescriptionWrapper = styled.div`
  padding: 16px;
  display: flex;
  background-color: white;
  border-radius: 0 0 8px 8px;
`

const Description = styled.div`
  width: 100%;
`

const DescriptionTopBar = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const Title = styled.div`
  font-weight: bold;
`

const DescriptionBody = styled.div`
  
`

const WorkspaceInfo: FC = () => {
    return (
        <Wrapper>
            <BackgroundPicture/>
            <DescriptionWrapper>
                <DescriptionImg src="./media/icons/entities.png"/>
                <Description>
                    <DescriptionTopBar>
                        <Title>Corporate holdings</Title>
                        <SettingsButton src="./media/icons/cog.png"/>
                    </DescriptionTopBar>

                    <DescriptionBody>
                        Lorem ipsum
                    </DescriptionBody>
                </Description>

            </DescriptionWrapper>
        </Wrapper>
    )
}

export default WorkspaceInfo;