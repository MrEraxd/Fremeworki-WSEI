import React, {ChangeEvent, FC, MouseEvent, useState} from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import Entity from "./Entity";
import {useSelector} from "react-redux";
import {IState} from "../../reducers/reducers";
import {ICommentReducer} from "../../reducers/commentsReducer";
import {IPhotoReducer} from "../../reducers/photosReducer";
import {IUsersReducer} from "../../reducers/usersReducres";
import {ISingleComment} from "../../entities/comment";

const Wrapper = styled.div`
  width: 100%;
  
  &.fullscreen{
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: #F5F7F9;
    padding: 16px;
    box-sizing: border-box;
  }
`;

const TopBar = styled.div`
    display: flex;
  align-items: center;
`

const FilterBar = styled.div`
  display: flex;
`

const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  
  & > * {
    margin: 0 8px;
  }
  
  & > *:hover{
    cursor: pointer;
  }
`

const RightButtons = styled.div`
  margin-left: auto;
  display: flex;
`

const EntitiesWrapper = styled.div`
  margin-top: 16px;
  
  &.mosaic {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
  
  &.list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;
  }
`

const Title = styled.div`
  margin-right: 12px;
`

const CustomIcon = styled.img`
  height: 1em;
`

const DisplayTypeWrapper = styled.div`
  margin-left: auto;
  display: flex;
`

const TypeButton = styled.div`
  padding: 8px;
  
  &:hover{
    cursor: pointer;
  }
`

const FakeDropdown = styled.div`
  background-color: #EAECF5;
  padding: 6px;
  display: flex;
  align-items: center;
  
  & > * {
    margin: 0 5px;
  }
`

const SortButton = styled.div`
  &:hover{
    cursor: pointer;
  }
`

const FiltersButton = styled.div`
    & > div > div {
      &:hover{
        cursor: pointer;
      }
    }
`

const ExpandWrapperButton = styled.img`

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

const FilterDropdownWrapper = styled.div`
    position: absolute;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
`

const FilterDropdownTitle = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`

const FilterDropdownRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  & > * {
    margin-right: 24px;
  }
`

const FilterDropdown = styled.div`
  display: flex;
  align-items: center;
  
  & > img {
    height: 0.4em !important;
    margin-left: 8px;
  }
`

const FilterDropdownTextWithIcon = styled.div`
  display: flex;
  align-items: center;
  
  & > img {
    margin-right: 8px;
  }
`

const CustomInput = styled.input`
  outline: none;
  border: none;
  background-color: #E8E8E8;
  padding: 8px;
`

function compare(a: ISingleComment, b: ISingleComment ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

export const Entities = () => {

    const [inputText, setInputText] = useState<string>('');
    const [onlyFollowed, showOnlyFollowed] = useState<boolean>(false);
    const [sortType, setSortType] = useState<string>("A to Z");
    const [displayType, setDisplayType] = useState<string>("mosaic");
    const [displayFullscreen, setFullscreen] = useState<boolean>(false);

    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const [wrapperRef2, dropdownOpen2, toggleDropdown2, closeDropdown2] = useDropdown();

    const { comments } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comments
    }))

    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    const { loggedUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const toggleSortHandler = () => {
        console.log("TEST")
        if(sortType === "A to Z"){
            setSortType("Z to A");
            return;
        }

        setSortType("A to Z");
    }

    const followedButtonHandler = (e: MouseEvent) => {
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

    let entitiesToDisplay = [];

    for(let i = 0; i < 30; i++){
        if(!comments[i]?.name.includes(inputText)){
            continue;
        }

        if(onlyFollowed && !(comments[i]?.postId === loggedUser.id)){
            continue;
        }

        entitiesToDisplay.push(<Entity
            key={comments[i]?.name}
            title={comments[i]?.name}
            body={comments[i]?.body}
            iconURL={photos[comments[i]?.id]?.url}
        />)
    }

    if(sortType === "A to Z"){
        // @ts-ignore
        entitiesToDisplay.sort((a,b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0));
    } else {
        // @ts-ignore
        entitiesToDisplay.sort((a,b) => (a.key < b.key) ? 1 : ((b.key < a.key) ? -1 : 0));
    }

    const getWrapperClass = () => {
        if(displayFullscreen){
            return "fullscreen";
        }
    }

    const toggleFullscreen = () => {
        setFullscreen(!displayFullscreen);
    }

    return (
        <Wrapper className={getWrapperClass()}>
            <TopBar>
                <Title>Entities</Title><CustomIcon src={"./media/icons/cog.png"}/>

                <DisplayTypeWrapper>
                    <TypeButton onClick={() => {setDisplayType("mosaic")}}>M</TypeButton>
                    <TypeButton onClick={() => {setDisplayType("list")}}>L</TypeButton>
                </DisplayTypeWrapper>
            </TopBar>

            <FilterBar>
                <LeftButtons>
                    <FakeDropdown>
                        <CustomIcon src={"./media/icons/cog.png"}/>
                        <span>All</span>
                        <CustomIcon src={"./media/icons/arrow-down.png"} style={{fontSize: "0.4em"}}/>
                    </FakeDropdown>

                    <CustomIcon src={"./media/icons/cog.png"} style={{borderRight: "2px solid #E8E8E8", paddingRight: "16px"}}/>

                    <SortButton>
                        <span onClick={() => toggleSortHandler()}>{sortType}</span>
                    </SortButton>

                    <FiltersButton style={{borderRight: "2px solid #E8E8E8", paddingRight: "16px"}}>
                        <div ref={wrapperRef2} style={{textDecoration: "none"}}>
                            <div className={"showFilters"} onClick={toggleDropdown2}>
                                <CustomIcon  src={"./media/icons/cog.png"} style={{marginRight: "6px"}}/>
                                <span>Filters</span>
                            </div>
                            {dropdownOpen2 &&
                                <FilterDropdownWrapper>
                                    <FilterDropdownTitle>Rows are filtered by the following conditions starting from the top.</FilterDropdownTitle>
                                    <FilterDropdownRow>
                                        <FilterDropdownTextWithIcon>
                                            <CustomIcon src={"./media/icons/cog.png"}/>
                                            <span>Where</span>
                                        </FilterDropdownTextWithIcon>

                                        <FilterDropdown>
                                            <span>Company</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <FilterDropdown>
                                            <span>Contains</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <CustomInput placeholder={"Type..."}/>
                                    </FilterDropdownRow>

                                    <FilterDropdownRow>
                                        <FilterDropdownTextWithIcon>
                                            <CustomIcon src={"./media/icons/cog.png"}/>
                                            <span>Where</span>
                                        </FilterDropdownTextWithIcon>

                                        <FilterDropdown>
                                            <span>Status</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <FilterDropdown>
                                            <span>Is</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <CustomInput placeholder={"Type..."}/>

                                        <FilterDropdown>
                                            <span>In</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <CustomInput placeholder={"Type..."}/>
                                    </FilterDropdownRow>

                                    <FilterDropdownRow>
                                        <FilterDropdownTextWithIcon>
                                            <CustomIcon src={"./media/icons/cog.png"}/>
                                            <span>Add</span>
                                        </FilterDropdownTextWithIcon>

                                        <FilterDropdown>
                                            <span>Status</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <FilterDropdown>
                                            <span>Ends before</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <CustomInput placeholder={"Type..."}/>

                                        <FilterDropdown>
                                            <span>In</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>

                                        <CustomInput placeholder={"Type..."}/>
                                    </FilterDropdownRow>

                                    <FilterDropdownRow style={{color: "#3C50A5", marginBottom: 0}}>
                                        <FilterDropdownTextWithIcon>
                                            <CustomIcon src={"./media/icons/cog.png"}/>
                                            <span>Add filter</span>
                                        </FilterDropdownTextWithIcon>

                                        <FilterDropdown>
                                            <span>choose property</span>
                                            <CustomIcon src={"./media/icons/arrow-down.png"}/>
                                        </FilterDropdown>
                                    </FilterDropdownRow>
                                </FilterDropdownWrapper>
                            }
                        </div>
                        <div onClick={closeDropdown2}/>
                    </FiltersButton>

                    <CustomIcon onClick={() => toggleFullscreen()} src={"./media/icons/cog.png"} style={{borderRight: "2px solid #E8E8E8", paddingRight: "16px"}}/>

                    <div onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
                        <CustomIcon src={"./media/icons/cog.png"} style={{marginRight: "8px"}}/>
                        <span>Share</span>
                    </div>
                </LeftButtons>

                <RightButtons style={{zIndex: 10}}>
                    <CustomFilter type="text" value={inputText} onChange={inputHandler} placeholder="Filter by title..."/>
                    <div ref={wrapperRef} style={{height: "32px", textDecoration: "none"}}>
                        <div onClick={toggleDropdown} style={{height: "100%"}}>
                            <ClosedSelectWrapper>
                                <span>{(onlyFollowedDisplayHandler()).toString()}</span>
                                <CustomIcon style={{height: "0.5em", marginLeft: "auto"}} src={"./media/icons/arrow-down.png"}/>
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
                </RightButtons>
            </FilterBar>

            <EntitiesWrapper className={displayType}  >
                {entitiesToDisplay}
            </EntitiesWrapper>
        </Wrapper>
    )
}

export default Entities;