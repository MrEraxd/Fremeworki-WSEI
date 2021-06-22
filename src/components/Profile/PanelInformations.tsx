import React, {FC} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IState} from "../../reducers/reducers";
import {IUsersReducer} from "../../reducers/usersReducres";
import {IPhotoReducer} from "../../reducers/photosReducer";

const Wrapper = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`

const Row = styled.div`
  margin-bottom: 12px;
`

const RowTitle = styled.div`
  color: #959AAA;
  margin-bottom: 12px;
`

const Attachment = styled.div`
  background-color: #e6e9ec;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-top: 12px;
`

const AttachmentIcon = styled.img`
  height: 22px;
  margin-right: 8px;
`

const PanelInformations: FC = () => {

    return (
        <Wrapper>
            <Title>Panel informations</Title>
            <Row>
                <RowTitle>Hourly fee</RowTitle>
                <div>610€/hour (Negociated)</div>
            </Row>

            <Row>
                <RowTitle>Terms & conditions</RowTitle>
                <div>Monthly 10k€ retainer - see with Jeanny Smith</div>
                <Attachment>
                    <AttachmentIcon src={"./media/icons/entities.png"}></AttachmentIcon>
                    <span>Attachment_lorem-ipsum25425.jpg</span>
                </Attachment>
            </Row>
        </Wrapper>
    )
}

export default PanelInformations;