import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #E8E8E8;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`

const Row = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  padding-left: 16px;
  background-color: #e6e9ec;
  margin-bottom: 6px;

  & > div {
    margin-left: 32px;
  }
`

const Picture = styled.img`
 margin-right: 8px; 
`

const MessageButton = styled.div`
  display: flex;
  align-items: center;
  
  & > span {
    margin-left: 6px;
  }
`

const ProfileButton = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-left: 6px;
  }
`

const ButtonIcon = styled.img`
  
`

const InternalCorrespondants: FC = () => {
    return (
        <Wrapper>
            <Title>Internal correspondants</Title>
            <Row>
                <Picture src={"./media/icons/people.png"}/>
                <span>Firstname Lastname</span>
                <MessageButton>
                    <ButtonIcon src={"./media/icons/bell.png"}/>
                    <span>Message</span>
                </MessageButton>

                <ProfileButton>
                    <ButtonIcon src={"./media/icons/people.png"}/>
                    <span>Profile</span>
                </ProfileButton>
            </Row>

            <Row>
                <Picture src={"./media/icons/people.png"}/>
                <span>Firstname Lastname</span>
                <MessageButton>
                    <ButtonIcon src={"./media/icons/bell.png"}/>
                    <span>Message</span>
                </MessageButton>

                <ProfileButton>
                    <ButtonIcon src={"./media/icons/people.png"}/>
                    <span>Profile</span>
                </ProfileButton>
            </Row>
        </Wrapper>
    )
}

export default InternalCorrespondants;