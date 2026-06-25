"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

import NavbarHiddenHamburger from "./NavbarHiddenHamburger";
import SearchNavbar from "./SearchNavbar";
import NavbarMenu from "./NavbarMenu"

import {
    NavbarContainer,
    NavbarContent,
    NavbarContentMenu,
    NavbarButton,
    ButtonLink,
} from "../styles/styleNavbar";

export default function Navbar (){
    const t = useTranslations("navbar");

    return(
        <NavbarContainer>
            <NavbarHiddenHamburger/>
            <NavbarContent>
                <NavbarMenu/>
                <NavbarContentMenu>
                    <NavbarButton><ButtonLink href="/auth">{t('author.login')}</ButtonLink></NavbarButton>
                    <NavbarButton>{t('author.register')}</NavbarButton> 
                    <SearchNavbar/>
                    <LocaleSwitcher/>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}