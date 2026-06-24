'use client'

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
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
} from '../styles/styleNavbar';

export default function NavbarHiddenHamburger (){
    const t = useTranslations("navbar");
    const currentYear = new Date().getFullYear();
    const [checked, setChecked] = useState(false);
    const [openMenuItem1, setOpenMenuItem1] = useState(false);
    const [openMenuItem2, setOpenMenuItem2] = useState(false);
    const [openMenuItem3, setOpenMenuItem3] = useState(false);
    const [openMenuItem4, setOpenMenuItem4] = useState(false);
    const [openMenuItem5, setOpenMenuItem5] = useState(false);
    const [openMenuItem6, setOpenMenuItem6] = useState(false);

    const handleHamburgerToggle = (isOpen: boolean) => {
        if (!isOpen) {
            setOpenMenuItem1(false);
            setOpenMenuItem2(false);
            setOpenMenuItem3(false);
            setOpenMenuItem4(false);
            setOpenMenuItem5(false);
            setOpenMenuItem6(false);
        }
        setChecked(isOpen);
    };

    return(
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
                                        <p>{t('menu.electronicComponents.header')}</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem1} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem1}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>CPU</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>Mainboard</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>RAM</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>SSD</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>HDD</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>VGA</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>Case</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>{t('menu.electronicComponents.heatSink')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>{t('menu.electronicComponents.power')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem1(false); }}>Fan Case</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                                <SidebarMenuLi>
                                    <SidebarMenuDivItem onClick={() => setOpenMenuItem2((v) => !v)}>
                                        <p>LapTop</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem2} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem2}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>ACER</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>ASUS</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>GIGABYTE</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>MSI</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>Lenovo</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>HP</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>DELL</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem2(false); }}>MACBOOK</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                                <SidebarMenuLi>
                                    <SidebarMenuDivItem onClick={() => setOpenMenuItem3((v) => !v)}>
                                        <p>{t('menu.screen')}</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem3} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem3}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>DELL</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>SAMSUNG</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>VSP</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>AOC</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>ASUS</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>GIGABYTE</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>MSI</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>ViewSonic</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem3(false); }}>PHILIPS</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                                <SidebarMenuLi>
                                    <SidebarMenuDivItem onClick={() => setOpenMenuItem4((v) => !v)}>
                                        <p>Gaming Gear</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem4} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem4}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.mouseGaming')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.mouseOffice')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.keyboardGaming')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.keyboardOffice')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.wirelessHeadphones')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem4(false); }}>{t('menu.gamingGear.wiredHeadphones')}</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                                <SidebarMenuLi>
                                    <SidebarMenuDivItem onClick={() => setOpenMenuItem5((v) => !v)}>
                                        <p>{t('menu.tableChair.header')}</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem5} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem5}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.chairGaming')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.chairOffice')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.chairErgonomic')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.chairSwivel')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.tableGaming')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.TableOffice')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.tableLifting')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem5(false); }}>{t('menu.tableChair.T-shapedDesk')}</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                                <SidebarMenuLi>
                                    <SidebarMenuDivItem onClick={() => setOpenMenuItem6((v) => !v)}>
                                        <p>{t('menu.accessory.header')}</p>
                                        <ToggleButton >
                                            <PlusMinusIcon open={openMenuItem6} />
                                        </ToggleButton>
                                    </SidebarMenuDivItem>
                                    <ContentDiv hidden={!openMenuItem6}>
                                        <ItemList>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.accessoryLaptop')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.accessoryHeatSink')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.accessoryGear')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.accessoryScreen')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.accessoryVGA&PSU')}</Item>
                                            <Item href="/product" onClick={() => { setChecked(false); setOpenMenuItem6(false); }}>{t('menu.accessory.armScreen')}</Item>
                                        </ItemList>
                                    </ContentDiv>
                                </SidebarMenuLi>
                            </SidebarMenuUl>
                            <FooterMenuSidebar><p>Version &copy; {currentYear} recommend</p></FooterMenuSidebar>
                        </SidebarMenu>
                    </NavbarMenuHidden>
    )
}