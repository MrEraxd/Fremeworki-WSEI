import React, {FC} from "react";
import styled from "styled-components";
import LatestPublications from "./LatestPublications/LatestPublications";
import Workspaces from "./Workspaces/Workspaces";
import Comments from "../common/Comments/Comments";

const Wrapper = styled.div`
  width: 100%;
`;

const MainMenu: FC = () => {
    return (
        <Wrapper>
            <LatestPublications />
            <Workspaces />
            <Comments title={"Resume your work"} showButtons={false}/>
        </Wrapper>
    )
}

export default MainMenu;