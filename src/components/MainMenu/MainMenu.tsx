import React, {FC} from "react";
import styled from "styled-components";
import LatestPublications from "./LatestPublications/LatestPublications";
import ResumeYourWork from "./ResumeYourWork/ResumeYourWork";
import Workspaces from "./Workspaces/Workspaces";



const Wrapper = styled.div`
  width: 100%;
`;

const MainMenu: FC = () => {
    return (
        <Wrapper>
            <LatestPublications />
            <Workspaces />
            <ResumeYourWork />
        </Wrapper>
    )
}

export default MainMenu;