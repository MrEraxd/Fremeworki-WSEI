import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`

const InnerWrapper = styled.div`
`

const PublicationTitle = styled.div`
  margin-bottom: 12px;
`

const PublicationPicture = styled.img`
  height: 80px;
  margin-right: 16px;
`

const PublicationInfo = styled.div`
  display: flex;
  font-weight: 300;
  
  
  & > * {
    margin-right: 12px;
  }
`

interface IProps {
    title: string;
    username: string
    imgUrl: string;
}


const Publication = (props: IProps) => {
    return (
        <Wrapper>
            <PublicationPicture src={props.imgUrl}/>

            <InnerWrapper>
                <PublicationTitle>{props?.title}</PublicationTitle>
                <PublicationInfo>
                    <div>7 Jan 2020</div>
                    <img src={"/media/icons/people.png"} alt={"people"}/>
                    <div>{props?.username}</div>
                </PublicationInfo>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Publication;