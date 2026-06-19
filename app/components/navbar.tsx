'use client'

import React, { useState } from 'react';
import {
    NavbarContainer,
    Checkbox,
    BarAnimated,
    MenuChecked,
    NavbarMenuHidden,
    SidebarMenu,
    SidebarMenuUl,
    SidebarMenuLi,
    SidebarMenuDivItem,
    ToggleButton,
    PlusMinusIcon,
    ContentDiv,
    ItemList,
    Item,
    NavbarContent,
    NavbarContentMenu,
    NavbarContentText,
    NavbarButton,
    NavbarMenuSearch,
    MenuCheckedSearch,
    SidebarSearch,
} from '../styles/styleNavbar'

import { Search } from "@mui/icons-material";

export default function Navbar (){
    const [checked, setChecked] = useState(false);
    const [openMenuItem1, setOpenMenuItem1] = useState(false);
    const [openMenuItem2, setOpenMenuItem2] = useState(false);
    const [openMenuItem3, setOpenMenuItem3] = useState(false);
    const [openMenuItem4, setOpenMenuItem4] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleHamburgerToggle = (isOpen: boolean) => {
        if (!isOpen) {
            setOpenMenuItem1(false);
            setOpenMenuItem2(false);
            setOpenMenuItem3(false);
            setOpenMenuItem4(false);
        }
        setChecked(isOpen);
    };

    return(
        <NavbarContainer>
            <NavbarMenuHidden>
                <Checkbox
                    type="checkbox"
                    id="check"
                    checked={checked}
                    onChange={(e) => handleHamburgerToggle(e.target.checked)}
                />
                <MenuChecked $checked={checked} htmlFor="check">
                    <BarAnimated $checked={checked} className="bar" />
                    <BarAnimated $checked={checked} className="bar" />
                    <BarAnimated $checked={checked} className="bar" />
                </MenuChecked>

                {/* Div dropdown open */}
                <SidebarMenu $open={checked}>
                    <SidebarMenuUl>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem1((v) => !v)}>
                                <p>sdahidocgsaydgsahudgsahudujdhsaiuyd</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem1} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem1}>
                                <ItemList>
                                    <Item>Mục 1</Item>
                                    <Item>Mục 2</Item>
                                    <Item>Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem2((v) => !v)}>
                                <p>sdahidocgsaydgsahudgsahudujdhsaiuyd</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem2} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem2}>
                                <ItemList>
                                    <Item>Mục 1</Item>
                                    <Item>Mục 2</Item>
                                    <Item>Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem3((v) => !v)}>
                                <p>sdahidocgsaydgsahudgsahudujdhsaiuyd</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem3} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem3}>
                                <ItemList>
                                    <Item>Mục 1</Item>
                                    <Item>Mục 2</Item>
                                    <Item>Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem4((v) => !v)}>
                                <p>sdahidocgsaydgsahudgsahudujdhsaiuyd</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem4} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem4}>
                                <ItemList>
                                    <Item>Mục 1</Item>
                                    <Item>Mục 2</Item>
                                    <Item>Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                    </SidebarMenuUl>
                </SidebarMenu>
            </NavbarMenuHidden>
            <NavbarContent>
                <NavbarContentMenu>                
                    <h1>q</h1>              
                    <NavbarContentText href="/product">product</NavbarContentText>
                    <NavbarContentText href="/product">product</NavbarContentText>
                    <NavbarContentText href="/product">product</NavbarContentText>
                    <NavbarContentText href="/product">product</NavbarContentText>
                    <NavbarContentText href="/product">product</NavbarContentText>
                </NavbarContentMenu>
                <NavbarContentMenu>
                    <NavbarButton>Login</NavbarButton>
                    <NavbarButton>Register</NavbarButton> 
                    <NavbarMenuSearch>
                        <Checkbox
                        type="checkbox"
                        id="search-toggle"
                        checked={openSearch}
                        onChange={(e) => setOpenSearch(e.target.checked)}
                        />
                        <MenuCheckedSearch $checked={openSearch} htmlFor="search-toggle">
                        {/* Ở đây bạn có thể để icon search/hamburger */}
                        <Search/>
                        </MenuCheckedSearch>
                    </NavbarMenuSearch>

                    {/* Div dropdown open */}
                    <SidebarSearch $open={openSearch}>
                        <h3>Search</h3>
                        <input type="text" placeholder="Search..." />
                        <p>Content ở đây...</p>
                    </SidebarSearch>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}