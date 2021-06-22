import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
`

const InnerWrapper = styled.div`
    margin-left: auto;
  display: flex;
`

const ButtonIcon = styled.img`
  margin-right: 6px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`

const ProfileNav: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Button>
                    <ButtonIcon src={"./media/icons/ecosystem.png"}/>
                    <span>Message</span>
                </Button>
                <Button>
                    <ButtonIcon src={"./media/icons/ecosystem.png"}/>
                    <span>Create a request</span>
                </Button>
                <Button>
                    <ButtonIcon src={"./media/icons/ecosystem.png"}/>
                    <span>Add to a cluster</span>
                </Button>
            </InnerWrapper>
        </Wrapper>
    )
}

export default ProfileNav;