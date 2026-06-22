'use client'

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from '@mui/icons-material';
import LocaleSwitcher from './LocaleSwitcher';
import { Link, usePathname} from "@/i18n/navigation";
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
    FooterMenuSidebar,
    NavbarContent,
    NavbarContentMenu,
    NavbarContentText,
    NavbarButton,
    NavbarMenuSearch,
    MenuCheckedSearch,
    SidebarSearch,
    SidebarSearchDiv,
    SearchFormDiv,
    SidebarSearchDivDelete,
} from '../styles/styleNavbar'

export default function Navbar (){
    // path link
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href;
    }
    const t = useTranslations("navbar");
    const currentYear = new Date().getFullYear();
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
                                <p>Concast</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem1} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem1}>
                                <ItemList>
                                    <Item href="/product">Mục 1</Item>
                                    <Item href="/product">Mục 2</Item>
                                    <Item href="/product">Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem2((v) => !v)}>
                                <p>Concast</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem2} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem2}>
                                <ItemList>
                                    <Item href="/product">Mục 1</Item>
                                    <Item href="/product">Mục 2</Item>
                                    <Item href="/product">Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem3((v) => !v)}>
                                <p>Concast</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem3} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem3}>
                                <ItemList>
                                    <Item href="/product">Mục 1</Item>
                                    <Item href="/product">Mục 2</Item>
                                    <Item href="/product">Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                        <SidebarMenuLi>
                            <SidebarMenuDivItem onClick={() => setOpenMenuItem4((v) => !v)}>
                                <p>Concast</p>
                                <ToggleButton >
                                    <PlusMinusIcon open={openMenuItem4} />
                                </ToggleButton>
                            </SidebarMenuDivItem>
                            <ContentDiv hidden={!openMenuItem4}>
                                <ItemList>
                                    <Item href="/product">Mục 1</Item>
                                    <Item href="/product">Mục 2</Item>
                                    <Item href="/product">Mục 3</Item>
                                </ItemList>
                            </ContentDiv>
                        </SidebarMenuLi>
                    </SidebarMenuUl>
                    <FooterMenuSidebar><p>Version &copy; {currentYear} recommend</p></FooterMenuSidebar>
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
                    <NavbarButton>{t('author.login')}</NavbarButton>
                    <NavbarButton>{t('author.register')}</NavbarButton> 
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
                        <SidebarSearchDiv>
                            <h3>Search item you want.</h3>
                            <form>
                                <SearchFormDiv>
                                    <Search/>
                                    <input type="text" placeholder="Search..." />
                                </SearchFormDiv>
                            </form>
                            <p>Item ......</p>
                        </SidebarSearchDiv>
                        <SidebarSearchDivDelete
                            onClick={() => setOpenSearch(false)}
                            title="Đóng tìm kiếm"
                        />
                    </SidebarSearch>
                    <LocaleSwitcher/>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}