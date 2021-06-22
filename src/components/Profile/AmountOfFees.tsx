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

const AmountOfFees: FC = () => {
    return (
        <Wrapper>
            <Title>AmountOfFees</Title>
            <Table>
                <tr style={{fontWeight: "bold"}}>
                    <th>Year</th>
                    <th>Cost center</th>
                    <th>Total amount</th>
                    <th>Law firm</th>
                </tr>

                <tr>
                    <td>2019</td>
                    <td>CS 153</td>
                    <td>3 500€</td>
                    <td>Clifford chance</td>
                </tr>

                <tr>
                    <td>2018</td>
                    <td>CS 153</td>
                    <td>9 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td>2017</td>
                    <td>CS 47</td>
                    <td>10 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td></td>
                    <td>CS 153</td>
                    <td>18 500€</td>
                    <td>Linklaters</td>
                </tr>

                <tr>
                    <td></td>
                    <td>CS 32</td>
                    <td>15 500€</td>
                    <td>Linklaters</td>
                </tr>
            </Table>
        </Wrapper>
    )
}

export default AmountOfFees;