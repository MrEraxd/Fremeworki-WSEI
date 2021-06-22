import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`

const ServicesAndProjects: FC = () => {
    return (
        <Wrapper>
            <Title>Services & projects</Title>
            <div>Corporate M&A and international acquisitions</div>
        </Wrapper>
    )
}

export default ServicesAndProjects;