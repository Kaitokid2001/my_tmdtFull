'use client'

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import {
    NavbarContainer,
    NavbarContent,
    NavbarContentMenu,
    NavbarButton,
} from "../styles/styleNavbar";

import NavbarHiddenHamburger from "./NavbarHiddenHamburger";
import SearchNavbar from "./SearchNavbar";
import NavbarMenu from "./NavbarMenu"

export default function Navbar (){
    const t = useTranslations("navbar");

    return(
        <NavbarContainer>
            <NavbarHiddenHamburger/>
            <NavbarContent>
                <NavbarMenu/>
                <NavbarContentMenu>
                    <NavbarButton>{t('author.login')}</NavbarButton>
                    <NavbarButton>{t('author.register')}</NavbarButton> 
                    <SearchNavbar/>
                    <LocaleSwitcher/>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}