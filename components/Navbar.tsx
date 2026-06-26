"use client";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

import FuncNavbarHiddenHamburger from "./FuncNavbarHiddenHamburger";
import FuncSearchNavbar from "./FuncSearchNavbar";
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
            <FuncNavbarHiddenHamburger/>
            <NavbarContent>
                <NavbarMenu/>
                <NavbarContentMenu>
                    <ButtonLink href="/auth">
                        <NavbarButton>{t('author.login')}</NavbarButton>
                    </ButtonLink>
                    <ButtonLink href={"/register"}>
                        <NavbarButton>{t('author.register')}</NavbarButton> 
                    </ButtonLink>
                    <FuncSearchNavbar/>
                    <LocaleSwitcher/>
                </NavbarContentMenu>
            </NavbarContent>
        </NavbarContainer>
    )
}