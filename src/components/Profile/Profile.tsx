import React, {FC} from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo";
import Qualifitations from "./Qualifitations";
import ServicesAndProjects from "./ServicesAndProjects";
import InternalCorrespondants from "./InternalCorrespondants";
import Proposals from "./Proposals";
import InternalReviews from "./InternalReviews";
import AmountOfFees from "./AmountOfFees";
import PanelInformations from "./PanelInformations";
import ProfileNav from "./ProfileNav";

const Wrapper = styled.div`
    
`

const Profile: FC = () => {
    return (
        <Wrapper>
            <ProfileNav/>

            <BasicInfo/>

            <Qualifitations/>

            <PanelInformations/>

            <ServicesAndProjects/>

            <InternalCorrespondants/>

            <Proposals/>

            <InternalReviews/>

            <AmountOfFees/>
        </Wrapper>
    )
}

export default Profile;