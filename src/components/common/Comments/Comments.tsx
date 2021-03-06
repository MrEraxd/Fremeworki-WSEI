import React, {ChangeEvent, FC, MouseEvent, useState} from "react";
import styled from "styled-components";
import Comment from "./Comment";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers/reducers";
import {IUsersReducer} from "../../../reducers/usersReducres";
import {ICommentReducer} from "../../../reducers/commentsReducer";
import CommentButtons from "./CommentButtons";
import useDropdown from "react-dropdown-hook";


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
    
    &:hover {
      cursor: pointer;
    }
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

const BlockWrapper = styled.div`
  border: 2px solid #eeeeee;
  border-top: none;
`

const Block = styled.button`
  padding: 8px 8px 8px 16px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: white;

  > span {
    justify-self: center;
    padding-left: 10px;
  }

  &:hover{
    background-color: #eee;
    cursor: pointer;
  }
`

type CommentsProps = {
    title: string;
    showButtons: boolean;
}

const Comments: FC<CommentsProps> = ({title, showButtons}) => {

    const { comments } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comments
    }))

    const { usersList, loggedUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    let workToDisplay = [];

    const [inputText, setInputText] = useState<string>('');
    const [onlyFollowed, showOnlyFollowed] = useState<boolean>(false);
    const [pageNumber, setPageNumber] = useState<number>(0);

    for(let i = pageNumber * 10; i < (pageNumber * 10) + 10; i++) {
        if(comments[i]?.name.toLowerCase().includes(inputText.toLowerCase())){
            if(onlyFollowed && comments[i]?.postId === loggedUser.id){
                workToDisplay.push(<Comment
                    key={i + "Work"}
                    title={comments[i]?.name}
                    user={usersList[comments[i]?.postId]}
                    body={comments[i]?.body}
                />)
            }
            else if(!onlyFollowed){
                workToDisplay.push(<Comment
                    key={i + "Work"}
                    title={comments[i]?.name}
                    user={usersList[comments[i]?.postId]}
                    body={comments[i]?.body}
                />)
            }
        }
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const followedButtonHandler = (e: MouseEvent) => {
        console.log((e.target as HTMLButtonElement).innerText.toLowerCase());
        if((e.target as HTMLButtonElement).innerText.toLowerCase() === "all"){
            showOnlyFollowed(false);
        }
        else{
            showOnlyFollowed(true);
        }
    }

    const onlyFollowedDisplayHandler = (): string => {
        if(onlyFollowed){
            return "Followed";
        }

        return "All";
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
                            <span>{(onlyFollowedDisplayHandler()).toString()}</span>
                            <CustomIcons style={{height: "0.5em", marginLeft: "auto"}} src={"./media/icons/arrow-down.png"}/>
                        </ClosedSelectWrapper>
                    </div>
                    {dropdownOpen &&
                        <BlockWrapper>
                            <Block onClick={followedButtonHandler}>All</Block>
                            <Block onClick={followedButtonHandler}>Followed</Block>
                        </BlockWrapper>
                    }
                </div>
                <div onClick={closeDropdown}/>
            </NavBar>

            {showedButtons()}

            <WorkWrapper>
                {workToDisplay}
            </WorkWrapper>

            <PaginationNav>
                <span onClick={() => setPageNumber(prevState => prevState - 1)}>PREVIOUS</span>
                <span>{pageNumber + 1}</span>
                <span onClick={() => setPageNumber(prevState => prevState + 1)}>NEXT</span>
            </PaginationNav>
        </Wrapper>
    )
}

export default Comments;