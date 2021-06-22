import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border-bottom: 1px solid #E8E8E8;
  margin-bottom: 16px;
`

const Row = styled.div`
  margin-bottom: 16px;
`

const RowTitle = styled.div`
  margin-bottom: 6px;
  color: #ACAFBA;
`

const RowButton = styled.div`
  display: inline-block;
  padding: 6px;
  background-color: #E6F0F3;
  color: #4693A7;
  margin-right: 8px;
  border-radius: 6px;
`

const Qualifitations: FC = () => {
    return (
        <Wrapper>
            <Row>
                <RowTitle>Expertise</RowTitle>
                <RowButton>Merges and acquisition</RowButton>
            </Row>
            <Row>
                <RowTitle>Specialites</RowTitle>
                <RowButton>Cross border operation</RowButton>
                <RowButton>Transaction over 500ME/$</RowButton>
            </Row>
            <Row>
                <RowTitle>Admission to practice law</RowTitle>
                <RowButton>Paris bar association</RowButton>
                <RowButton>Tunisian bar association</RowButton>
            </Row>
            <Row>
                <RowTitle>Countries</RowTitle>
                <RowButton>Tunisia</RowButton>
            </Row>
        </Wrapper>
    )
}

export default Qualifitations;