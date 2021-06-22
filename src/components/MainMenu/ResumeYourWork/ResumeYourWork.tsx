import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import Work from "./Work";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IUsersReducer} from "../../../reducers/usersReducres";
import {ICommentReducer} from "../../../reducers/commentsReducer";

const Wrapper = styled.div`
  
`;

const WorkWrapper = styled.div`
  
`;

const PaginationNav = styled.div`
  margin-top: 24px;
  text-align: center;
  margin-bottom: 48px;
  
  & > span {
    padding: 0 8px;
    color: #2A3F9D;
  }
`

const NavBar = styled.div`

`

const CustomFilter = styled.input`
  box-sizing: border-box;
  border: 1px solid #EBEBEB;
  outline: none;
  height: 2em;
  margin-left: 8px;
  margin-right: 8px;
  display: inline-block;
`

const ResumeYourWork: FC = () => {

    const { comments } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comments
    }))

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    let workToDisplay = [];

    const [inputText, setInputText] = useState<string>('');

    for(let i = 0; i < 100; i++) {
        if(comments[i]?.name.toLowerCase().includes(inputText.toLowerCase())){
            workToDisplay.push(<Work
                key={i + "Work"}
                title={comments[i]?.name}
                user={usersList[comments[i]?.postId]}
                body={comments[i]?.body}
            />)
        }
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <NavBar>
                <h2 style={{display: "inline-block"}}>Resume your Work</h2>
                <CustomFilter type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>
            </NavBar>

            <WorkWrapper>
                {workToDisplay}
            </WorkWrapper>

            <PaginationNav>
                <span>PREVIOUS</span>
                <span>01 02 03 04</span>
                <span>NEXT</span>
            </PaginationNav>
        </Wrapper>
    )
}

export default ResumeYourWork;