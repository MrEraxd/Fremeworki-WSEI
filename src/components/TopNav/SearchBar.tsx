import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #E8E8E8;
  padding: 6px;
  border-radius: 4px;
`;

const CustomInput = styled.input`
    border: none;
    width: 300px;
    outline: none;
`;

const CustomImg = styled.img`
`

const SearchBar: FC = () => {
    return (
        <Wrapper>
            <CustomInput placeholder={"Search Legalcluster"}/>
            <CustomImg src={"./media/icons/search.png"}/>
        </Wrapper>
    )
}

export default SearchBar;