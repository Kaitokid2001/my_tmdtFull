'use client'

import React, { useState } from 'react';
import {
    NavbarContainer,
    Checkbox,
    BarAnimated,
    MenuChecked,
    NavbarMenuHidden,
    NavbarContent,
    NavbarContentMenu,
    NavbarContentText,
    NavbarButton,
} from '../styles/styleNavbar'

import { Search } from "@mui/icons-material";

export default function Navbar (){
    const [checked, setChecked] = useState(false);

    return(
        <NavbarContainer>
            <NavbarMenuHidden>
                <Checkbox
                    type="checkbox"
                    id="check"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <MenuChecked $checked={checked} htmlFor="check">
                    <BarAnimated $checked={checked} className="bar" />
                    <BarAnimated $checked={checked} className="bar" />
                    <BarAnimated $checked={checked} className="bar" />
                </MenuChecked>
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