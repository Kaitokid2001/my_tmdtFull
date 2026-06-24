"use client"

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
    NavbarContentMenu,
    NavbarContentText,
    SidebarMenuFull,
    ItemList,
    Item,
} from "../styles/styleNavbar";

type MenuItemProps = {
    id: string;
    label: React.ReactNode;
    children: React.ReactNode;
    activeMenu: string | null;
    setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>;
};

function MenuItem({ id, label, children, activeMenu, setActiveMenu }: MenuItemProps) {
    const visible = activeMenu === id;
    const timeoutRef = useRef<number | null>(null);

    const clearTimer = () => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleEnter = () => {
        clearTimer();
        // Open this menu and immediately close others via activeMenu
        setActiveMenu(id);
    };

    const handleLeave = () => {
        clearTimer();
        // Keep visible for 30s after leaving, but only clear if still this menu
        timeoutRef.current = window.setTimeout(() => {
            setActiveMenu((prev) => (prev === id ? null : prev));
        }, 500);
    };

    useEffect(() => {
        return () => clearTimer();
    }, []);

    return (
        <NavbarContentText onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {label}
            <SidebarMenuFull $visible={visible}>{children}</SidebarMenuFull>
        </NavbarContentText>
    );
}

export default function NavbarMenu() {
    const t = useTranslations("navbar");
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <>
            <NavbarContentMenu>
                <h1>q</h1>
                <MenuItem id="electronics" label={t("menu.electronicComponents.header")} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">CPU</Item>
                        <Item href="/product">Mainboard</Item>
                        <Item href="/product">RAM</Item>
                        <Item href="/product">SSD</Item>
                        <Item href="/product">HDD</Item>
                        <Item href="/product">VGA</Item>
                        <Item href="/product">Case</Item>
                        <Item href="/product">{t("menu.electronicComponents.heatSink")}</Item>
                        <Item href="/product">{t("menu.electronicComponents.power")}</Item>
                        <Item href="/product">Fan Case</Item>
                    </ItemList>
                </MenuItem>

                <MenuItem id="laptop" label={"LapTop"} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">ACER</Item>
                        <Item href="/product">ASUS</Item>
                        <Item href="/product">GIGABYTE</Item>
                        <Item href="/product">MSI</Item>
                        <Item href="/product">Lenovo</Item>
                        <Item href="/product">HP</Item>
                        <Item href="/product">DELL</Item>
                        <Item href="/product">MACBOOK</Item>
                    </ItemList>
                </MenuItem>

                <MenuItem id="screen" label={t("menu.screen")} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">DELL</Item>
                        <Item href="/product">SAMSUNG</Item>
                        <Item href="/product">VSP</Item>
                        <Item href="/product">AOC</Item>
                        <Item href="/product">ASUS</Item>
                        <Item href="/product">GIGABYTE</Item>
                        <Item href="/product">MSI</Item>
                        <Item href="/product">ViewSonic</Item>
                        <Item href="/product">PHILIPS</Item>
                    </ItemList>
                </MenuItem>

                <MenuItem id="gaming" label={"Gaming Gear"} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">{t("menu.gamingGear.mouseGaming")}</Item>
                        <Item href="/product">{t("menu.gamingGear.mouseOffice")}</Item>
                        <Item href="/product">{t("menu.gamingGear.keyboardGaming")}</Item>
                        <Item href="/product">{t("menu.gamingGear.keyboardOffice")}</Item>
                        <Item href="/product">{t("menu.gamingGear.wirelessHeadphones")}</Item>
                        <Item href="/product">{t("menu.gamingGear.wiredHeadphones")}</Item>
                    </ItemList>
                </MenuItem>

                <MenuItem id="tableChair" label={t("menu.tableChair.header")} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">{t("menu.tableChair.chairGaming")}</Item>
                        <Item href="/product">{t("menu.tableChair.chairOffice")}</Item>
                        <Item href="/product">{t("menu.tableChair.chairErgonomic")}</Item>
                        <Item href="/product">{t("menu.tableChair.chairSwivel")}</Item>
                        <Item href="/product">{t("menu.tableChair.tableGaming")}</Item>
                        <Item href="/product">{t("menu.tableChair.TableOffice")}</Item>
                        <Item href="/product">{t("menu.tableChair.tableLifting")}</Item>
                        <Item href="/product">{t("menu.tableChair.T-shapedDesk")}</Item>
                    </ItemList>
                </MenuItem>

                <MenuItem id="accessory" label={t("menu.accessory.header")} activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
                    <ItemList>
                        <Item href="/product">{t("menu.accessory.accessoryLaptop")}</Item>
                        <Item href="/product">{t("menu.accessory.accessoryHeatSink")}</Item>
                        <Item href="/product">{t("menu.accessory.accessoryGear")}</Item>
                        <Item href="/product">{t("menu.accessory.accessoryScreen")}</Item>
                        <Item href="/product">{t("menu.accessory.accessoryVGA&PSU")}</Item>
                        <Item href="/product">{t("menu.accessory.armScreen")}</Item>
                    </ItemList>
                </MenuItem>
            </NavbarContentMenu>
        </>
    );
}