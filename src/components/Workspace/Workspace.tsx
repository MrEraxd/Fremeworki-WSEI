import React, {FC} from "react";
import styled from "styled-components";
import WorkspaceInfo from "./WorkspaceInfo";
import CorporateMatters from "./CorporateMatters";
import LatestUpdates from "./LatestUpdates";

const Wrapper = styled.div`

`

const Workspace: FC = () => {
    return (
        <Wrapper>
            <WorkspaceInfo></WorkspaceInfo>

            <CorporateMatters></CorporateMatters>

            <LatestUpdates></LatestUpdates>
        </Wrapper>
    )
}

export default Workspace;