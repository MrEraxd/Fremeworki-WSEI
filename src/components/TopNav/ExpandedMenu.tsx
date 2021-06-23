import React, {FC, useState, ChangeEvent} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {IUsersReducer} from "../../reducers/usersReducres";
import {IState} from "../../reducers/reducers";
import { Link } from "react-router-dom";
import {IPhotoReducer} from "../../reducers/photosReducer";
import {IWorkspaceReducer} from "../../reducers/workspacesReducer";

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 240px;
  z-index: 1000;
  border: 2px solid #eeeeee;
  border-top: none;
`

const MenuElement = styled.div`
  padding: 8px 8px 8px 16px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  
  > span {
    justify-self: center;
    padding-left: 10px;
  }
  
  &:hover{
    background-color: #eee;
    cursor: pointer;
  }
`

const MenuGroup = styled.div`
  padding: 8px 0;
`

const MenuGroupTitle = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 8px;
  height: 16px;
  padding-left: 8px;
  color: #808080;
`

const MenuElementIcon = styled.img`
    height: 24px;
`

const CustomFilter = styled.input`
  width: calc(100% - 16px);
  box-sizing: border-box;
  border: 1px solid #EBEBEB;
  outline: none;
  height: 2em;
  margin-left: 8px;
  margin-right: 8px;
`

const ProfileIcon = styled.img`
    width: 27px;
`

const AccountInfoWrapper = styled.div`
  padding-left: 10px;
`

const AccountName = styled.div`
  
`

const SeeProfileButton = styled.div`
  font-size: 0.7em;
`

const expandedMenu: FC = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loggedUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { photos } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
    }))

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { workspaces } = useSelector<IState, IWorkspaceReducer>(state => ({
        ...state.workspaces
    }))

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const changeActualStorage = (JSONString: string) => {
        console.log(JSONString)
        localStorage.setItem("actualWorkspace", JSONString)
    }

    const workspacesToDisplay = [];

    for(let i = 0; i < 4; i++){

        let JSONObj = {
            title: workspaces[i].title,
            body: workspaces[i].body,
            iconImgUrl: photos[workspaces[i].id].url
        }

        if(workspaces[i].title.toLowerCase().includes(inputText.toLowerCase())){
            workspacesToDisplay.push(
                <Link to="/workspace" onClick={() => changeActualStorage(JSON.stringify(JSONObj))}>
                    <MenuElement>
                        <MenuElementIcon src={photos[workspaces[i].id].url}/>
                        <span>{workspaces[i].title.substring(0, 16)}</span>
                    </MenuElement>
                </Link>
            )
        }
    }

    return (
        <Wrapper>
            <CustomFilter type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>

            {'Platform'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuGroupTitle>Platform</MenuGroupTitle>
            }
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/">
                    <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Home</span></MenuElement>
                </Link>
            }
            {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/mock">
                    <MenuElement><MenuElementIcon src={"./media/icons/publications.png"}/><span>Publications</span></MenuElement>
                </Link>
            }
            {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/mock">
                    <MenuElement><MenuElementIcon src={"./media/icons/people.png"}/><span>People</span></MenuElement>
                </Link>
            }
            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/entities">
                    <MenuElement><MenuElementIcon src={"./media/icons/entities.png"}/><span>Entities</span></MenuElement>
                </Link>
            }
            {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/mock">
                    <MenuElement><MenuElementIcon src={"./media/icons/administration.png"}/><span>Administration</span></MenuElement>
                </Link>
            }

            {'Workspaces'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuGroupTitle>Workspaces</MenuGroupTitle>
            }

            {/*{'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Client contract</span></MenuElement>
            }
            {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Supplier contract</span></MenuElement>
            }
            {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Corporate</span></MenuElement>
            }
            {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Group Norms</span></MenuElement>
            }
            {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <MenuElement><MenuElementIcon src={"./media/icons/house2.png"}/><span>Real estate contracts</span></MenuElement>
            }*/}

            {workspacesToDisplay}

            <MenuGroup style={{borderTop: "1px solid #EBEBEB"}}>
                <MenuGroupTitle>Account</MenuGroupTitle>
                <Link to={"/profile"}>
                    <MenuElement>
                        <ProfileIcon src={photos[loggedUser.id].thumbnailUrl}/>
                        <AccountInfoWrapper>
                            <AccountName>{loggedUser.name}</AccountName>
                            <SeeProfileButton>See profile</SeeProfileButton>
                        </AccountInfoWrapper>
                    </MenuElement>
                </Link>
                <Link to="/mock">
                    <MenuElement><MenuElementIcon src={"./media/icons/privacy.png"}/><span>Privacy</span></MenuElement>
                </Link>
                <Link to="/mock">
                    <MenuElement><MenuElementIcon src={"./media/icons/settings.png"}/><span>Settings</span></MenuElement>
                </Link>
            </MenuGroup>

            <MenuGroup style={{borderTop: "1px solid #EBEBEB"}}>
                <MenuElement style={{display: "flex", justifyContent: "center"}}>
                    <MenuElementIcon src={"./media/icons/logout.png"}/>
                    <span>Logout</span>
                </MenuElement>
            </MenuGroup>

        </Wrapper>
    )
}

export default expandedMenu