import React, {FC} from "react";
import styled from "styled-components";
import Workspace from "./Workspace";

const Wrapper = styled.div`
  overflow-x: scroll;
  margin-bottom: 24px;
  padding-bottom: 12px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: row;
  grid-gap: 24px;
`

const Workspaces: FC = () => {
    let items = [];

    for(let i = 0; i < 4; i++){
        items.push(<Workspace key={i}/>)
    }

    return (
        <Wrapper>
            <h2 style={{marginBottom: "16px"}}>Workspaces</h2>
            <InnerWrapper>
                {items}
            </InnerWrapper>
        </Wrapper>
    )
}

export default Workspaces;