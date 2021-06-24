import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  padding: 8px;
  border-radius: 8px;
`

const CustomImg = styled.img`
  height: 80px;
  margin-right: 16px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`

const InnerWrapper = styled.div`

`

const EntityBody = styled.div`

`

interface IEntity {
    title: string;
    body: string;
    iconURL: string;
}

const Entity = (props: IEntity) => {
    return (
        <Wrapper>
            <CustomImg src={props.iconURL}/>
            <InnerWrapper>
                <Title>{props.title.substring(0, 16)}</Title>
                <EntityBody>{props.body.substring(0, 30)}</EntityBody>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Entity;