import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import Comment from "./Comment";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IUsersReducer} from "../../../reducers/usersReducres";
import {ICommentReducer} from "../../../reducers/commentsReducer";
import CommentButtons from "./CommentButtons";
import useDropdown from "react-dropdown-hook";
import ExpandedCommentMenu from "./ExpandedCommentMenu";

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
  display: flex;
`

const CustomFilter = styled.input`
  box-sizing: border-box;
  border: 1px solid #EBEBEB;
  outline: none;
  height: 2em;
  margin-left: auto;
  margin-right: 8px;
  display: inline-block;
`

const Dropdown = styled.div`

`

const Title = styled.div`
  font-weight: bold;
`

const ClosedSelectWrapper = styled.div`
  width: 100px;
  margin-left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  user-select: none;
  color: #2A3F9D;
  

  &:hover{
    background-color: #eeeeee;
    cursor: pointer;
  }
`

const CustomIcons = styled.img`
  height: 100%;
  margin-left: 12px;
`

type CommentsProps = {
    title: string;
    showButtons: boolean;
}

const Comments: FC<CommentsProps> = ({title, showButtons}) => {

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
            workToDisplay.push(<Comment
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

    const showedButtons = () => {
        if(showButtons){
            return <CommentButtons/>
        }
    }

    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    return (
        <Wrapper>
            <NavBar>
                <Title>{title}</Title>
                <CustomFilter type="text" value={inputText} onChange={inputHandler} placeholder="Filter by title..."/>
                <div ref={wrapperRef} style={{height: "32px", textDecoration: "none"}}>
                    <div onClick={toggleDropdown} style={{height: "100%"}}>
                        <ClosedSelectWrapper>
                            <span>All</span>
                            <CustomIcons style={{height: "0.5em", marginLeft: "auto"}} src={"./media/icons/arrow-down.png"}/>
                        </ClosedSelectWrapper>
                    </div>
                    {dropdownOpen &&
                        <div>
                            <ExpandedCommentMenu />
                        </div>
                    }
                </div>
                <div onClick={closeDropdown}/>
            </NavBar>

            {showedButtons()}

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

export default Comments;