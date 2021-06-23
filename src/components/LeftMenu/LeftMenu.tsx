import React, {FC} from "react";
import ShortProfileWrapper from "./ShortProfile"
import styled from "styled-components";
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  width: 260px;
  min-width: 260px;
  margin-top: 16px;
`

const Row = styled.div`  
  margin-bottom: 16px;
  
  & > img{
    height: 24px;
    margin-right: 16px;
  }
`

const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <ShortProfileWrapper/>
            <div style={{padding: "16px"}}>
                <Link to="/mock">
                    <Row>
                        <img src={"./media/icons/publications.png"} alt={"publications"}/>
                        <span>Publications</span>
                    </Row>
                </Link>

                <Link to="/mock">
                    <Row>
                        <img src={"./media/icons/ecosystem.png"}  alt={"ecosystem"}/>
                        <span>Ecosystem</span>
                    </Row>
                </Link>

                <Link to="/entities">
                    <Row>
                        <img src={"./media/icons/entities.png"}  alt={"entities"}/>
                        <span>Entities</span>
                    </Row>
                </Link>
            </div>
        </Wrapper>
    )
}

export default LeftMenu;