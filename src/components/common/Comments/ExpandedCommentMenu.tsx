import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
`;

const Block = styled.div`
  padding: 8px 8px 8px 16px;
  width: 100%;
  display: flex;
  box-sizing: border-box;

  > span {
    justify-self: center;
    padding-left: 10px;
  }

  &:hover{
    background-color: #eee;
    cursor: pointer;
  }
`

const ExpandedCommentMenu: FC = () => {
    return (
        <Wrapper>
            <Block>All</Block>
            <Block>Followed</Block>
        </Wrapper>
    )
}

export default ExpandedCommentMenu;