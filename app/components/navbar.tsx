'use client'

import React, { useState } from 'react';
import {
    NavbarContainer,
    InputOpen,
    NavbarMenuHidden,
    NavbarContent,
    NavbarContentMenu,
    NavbarContentText,
    NavbarButton,
} from '../styles/styleNavbar'

import { Search } from "@mui/icons-material";

export default function Navbar (){
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <NavbarContainer>
            <NavbarMenuHidden>
                <InputOpen 
                            checked={openMenu}
                            // onChange={activeOpenMenu}
                        />
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
                    <NavbarButton>Registy</NavbarButton>
                    <Search/>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}