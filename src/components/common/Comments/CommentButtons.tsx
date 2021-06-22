import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  grid-gap: 16px;
  margin-top: 12px;
`

const Button = styled.div`
  padding: 7px;
  border-radius: 4px;
`

const ButtonImg = styled.img`
  height: 0.8em;
  margin-right: 4px;
`

const CommentButtons: FC = () => {
    return (
        <Wrapper>
            <Button style={{backgroundColor: "#EAECF5"}}>All</Button>
            <Button style={{backgroundColor: "#CCE5CC"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>SAS</span>
            </Button>
            <Button style={{backgroundColor: "#EDF6FA"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>SARL</span>
            </Button>
            <Button style={{backgroundColor: "#F2E5C4"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>Secondary business</span>
            </Button>
            <Button style={{backgroundColor: "#CCCCCC"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>Communities</span>
            </Button>
            <Button style={{backgroundColor: "#E8E8E8"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>POA</span>
            </Button>
            <Button style={{backgroundColor: "#FFFFFF"}}>
                <ButtonImg src={"./media/icons/entities.png"}/>
                <span>Survey</span>
            </Button>
            <Button style={{backgroundColor: "#FFFFFF"}}>
                <span>...</span>
            </Button>
        </Wrapper>
    )
}

export default CommentButtons;