import React, {FC} from "react";
import styled from "styled-components";
import Comments from "../common/Comments/Comments";

const Wrapper = styled.div`
  
`

const LatestUpdates: FC = () => {
    return (
        <Wrapper>
            <Comments title={"Latest updates"} showButtons={true}></Comments>
        </Wrapper>
    )
}

export default LatestUpdates;