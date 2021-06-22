import React, {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`

const TopBar = styled.div`
  display: flex;
  margin-bottom: 16px;
  
  & > span {
    margin-left: auto;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const BlockWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`

const Block = styled.div`
  background-color: white;
  padding: 32px 16px;
  position: relative;
`

const BlockPicture = styled.img`
  margin-bottom: 12px;
  height: 32px;
`

const BlockBackgroundPicture = styled.img`
  width: 40%;
  height: 70%;
  right: 16px;
  position: absolute;
  opacity: 0.05;
`

const BlockTitle = styled.div`
  margin-bottom: 16px;
  z-index: 100;
  font-size: 1.1em;
`

const BlockDescription = styled.div`
`

const B = styled.span`
  font-weight: bold;
`

const CorporateMatters: FC = () => {
    return (
        <Wrapper>
            <TopBar>
                <Title>Start working on corporate matters</Title>
                <span>Hide</span>
            </TopBar>

            <BlockWrapper>
                <Block>
                    <BlockBackgroundPicture src={"./media/icons/entities.png"}/>
                    <BlockPicture src={"./media/icons/entities.png"}/>
                    <BlockTitle>Explore your <B>Entities</B></BlockTitle>
                    <BlockDescription>
                        Take a few minutes to look at the most important elements and
                        specifities of your entities
                    </BlockDescription>
                </Block>
                <Block>
                    <BlockBackgroundPicture src={"./media/icons/house.png"}/>
                    <BlockPicture src={"./media/icons/house.png"}/>
                    <BlockTitle>Structure the <B>ownership</B></BlockTitle>
                    <BlockDescription>
                        Get a clear view of the ownership by
                        looking at the relations between
                        individuals and entities.
                    </BlockDescription>
                </Block>
                <Block>
                    <BlockBackgroundPicture src={"./media/icons/search.png"}/>
                    <BlockPicture src={"./media/icons/search.png"}/>
                    <BlockTitle>Define the <B>calendar</B></BlockTitle>
                    <BlockDescription>
                        Prepare future events by creating
                        detailed plans around the life of your entity.
                    </BlockDescription>
                </Block>
            </BlockWrapper>
        </Wrapper>
    )
}

export default CorporateMatters;