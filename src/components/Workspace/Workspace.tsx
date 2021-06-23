import React, {} from "react";
import styled from "styled-components";
import WorkspaceInfo from "./WorkspaceInfo";
import CorporateMatters from "./CorporateMatters";
import LatestUpdates from "./LatestUpdates";

const Wrapper = styled.div`

`

const Workspace = () => {
    return (
        <Wrapper>
            <WorkspaceInfo/>

            <CorporateMatters/>

            <LatestUpdates/>
        </Wrapper>
    )
}

export default Workspace;