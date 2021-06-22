import React, {FC} from "react";
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import ExpandedMenu from "./ExpandedMenu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Wrapper2 = styled(Wrapper)`
  padding: 10px;
  height: 48px;
  box-shadow: 0 1px 7px 1px rgba(156,156,156,1);
  background-color: white;
`

const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  background: ${Colors.white};
  //justify-content: space-between;
`

const CustomImg = styled.img`
  height: 100%;
  margin-right: 16px;
`

const InputWrapper = styled.div`
  justify-self: center;
  margin-left: 96px;
`

const RightIcons = styled.div`
    margin-left: auto;
`

const CustomIcons = styled.img`
  height: 100%;
  margin-left: 12px;
`

const ClosedSelectWrapper = styled.div`
  width: 224px;
  margin-left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-bottom: 2px solid #eeeeee;
  user-select: none;
  
  &:hover{
    background-color: #eeeeee;
    cursor: pointer;
  }
`

const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png" alt="Logo.png" />

                <Link to="/">
                    <CustomImg style={{height: "26px", justifySelf:"flex-start"}} src="./media/icons/house.png" alt="House.png" />
                </Link>

                <div ref={wrapperRef} style={{height: "32px", textDecoration: "none"}}>
                    <div onClick={toggleDropdown} style={{height: "100%"}}>
                        <ClosedSelectWrapper>
                            <span>Home</span>
                            <CustomIcons style={{height: "0.5em", marginLeft: "auto"}} src={"./media/icons/arrow-down.png"}/>
                        </ClosedSelectWrapper>
                    </div>
                    {dropdownOpen &&
                    <div>
                        <ExpandedMenu />
                    </div>
                    }
                </div>
                <div onClick={closeDropdown}/>

                <InputWrapper>
                    <SearchBar />
                </InputWrapper>

                <RightIcons>
                    <CustomIcons src="./media/icons/house.png" />
                    <CustomIcons src="./media/icons/comments.png" />
                    <CustomIcons src="./media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    )
}

export default TopNav;