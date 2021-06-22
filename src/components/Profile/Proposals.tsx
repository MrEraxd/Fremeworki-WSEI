import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 16px;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`

const Table = styled.table`
  text-align: left;
  width: 100%;
  
  & td, & th {
    padding: 8px;
  }
  
`

const MoreProposalsButton = styled.div`
  margin-top: 12px;
  text-align: right;
  color: #74AEBD;
`

const Proposals: FC = () => {
    return (
        <Wrapper>
            <Title>Proposals</Title>
            <Table>
                <tr style={{fontWeight: "bold"}}>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Date</th>
                    <th>Firm</th>
                </tr>

                <tr>
                    <td>Operation Ti...</td>
                    <td>Renault Co...</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/01/2018</td>
                    <td>Racine</td>
                </tr>

                <tr>
                    <td>Op. Permeth...</td>
                    <td>Renault HQ</td>
                    <td>USA</td>
                    <td>#M&A</td>
                    <td>18/02/2019</td>
                    <td>Clifford chance</td>
                </tr>

                <tr>
                    <td>Op. Latandre</td>
                    <td>Renault br...</td>
                    <td>Italia</td>
                    <td>#Social</td>
                    <td>18/02/2019</td>
                    <td>SVZ</td>
                </tr>
            </Table>

            <MoreProposalsButton>See more proposals</MoreProposalsButton>
        </Wrapper>
    )
}

export default Proposals;