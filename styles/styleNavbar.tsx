import styled from "styled-components";
import Link from "next/link";

import { media } from './breakpoints';

export const NavbarContainer = styled.nav`
    display: flex;
    flex-decoration: row;
    width: 100%;
    position: absolute;
    height: 100vh - 50%;
`;

export const NavbarMenuHidden = styled.div`
    position: relative;
    display: inline-block;
    width: 100px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
    border-radius: 4px;
`;

//CSS Hamberger button
export const Checkbox = styled.input`
    display: none;
`;

export const MenuChecked = styled.label<{ $checked: boolean }>`
    position: absolute;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: ${(props) =>
    props.$checked
        ? 'translate(-50%, -50%)'
        : 'translate(-50%, -50%)'};
    transform-origin: center center;
    cursor: pointer;
    transition: 0.5s;
    background: none;
    border: none;
    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 1001;

    &:hover .bar {
        box-shadow: 0 0 25px 0 rgba(255, 255, 255, 0.5);
    }

    @media (${media.xl}) {
        display: flex;
    }
`;

export const BarAnimated = styled.div<{ $checked: boolean }>`
    background: #fff;
    width: 30px;
    height: 5px;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    transition: 0.4s;

    &:not(:first-child) {
        margin-top: 5px;
    }

    ${(props) =>
        props.$checked &&
        `
        &:nth-child(1) {
        margin-top: 10px;
        transform: rotate(-45deg);
        transform-origin: center;
        background: #E87722;
        }

        &:nth-child(2) {
        opacity: 0;
        }

        &:nth-child(3) {
        margin-top: -15px;
        transform: rotate(45deg);
        transform-origin: center;
        background: #E87722;
        }
    `}
`;

//Sidebar menu
export const SidebarMenu = styled.div<{ $open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transform: ${(props) =>
        props.$open ? 'translateX(0)' : 'translateX(-100%)'
    };
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding: 120px 0 0 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

export const SidebarMenuUl = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const SidebarMenuLi = styled.li`
    font-size: 2.8rem;
`;

export const SidebarMenuDivItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;

    p {
        font-size: 2.4rem;
        font-weight: 600;
        text-decoration: none;
        color: #000;
        text-transform: capitalize;

        &: hover {
            color: #E87722;
        }
    }
`;

//Sidebar plus
export const ToggleButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #fff;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    border: none;
    position: relative;
    overflow: visible;
`;

export const PlusMinusIcon = styled.span<{ open: boolean }>`
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;

    // Tạo dấu + bằng 2 thanh
    &::before,
    &::after {
        content: "";
        position: absolute;
        background: #E87722;
        transition: transform 0.3s ease, opacity 0.2s ease;
    }

    // Thanh ngang
    &::before {
        top: 9px;
        left: 0;
        width: 20px;
        height: 2px;
    }

    // Thanh dọc
    &::after {
        top: 0;
        left: 9px;
        width: 2px;
        height: 20px;
    }

    // Khi mở: chuyển thành dấu - (chỉ giữ thanh ngang)
    ${(props) =>
        props.open
        ? `
            &::after {
                opacity: 0;
                transform: rotate(90deg) scale(0);
            }
        `
        : `
            &::before {
                transform: rotate(0deg);
            }

            &::after {
                transform: rotate(0deg);
            }
        `}
`;

export const ContentDiv = styled.div<{ hidden: boolean }>`
    ${(props) =>
        props.hidden
        ? `display: none;`
        : `display: block;`}
    padding: 8px 10px;
    background: #fff;
    animation: fadeIn 0.25s ease;
    padding: 0 32px;

    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: translateY(-4px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
`;

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Item = styled(Link)`
    position: relative;
    padding-left: 28px;
    padding-top: 4px;
    padding-bottom: 4px;
    text-decoration: none;
    color: #000;
    font-size: 1.8rem;
    cursor: pointer;

    &::before,
    &::after {
        content: "";
        position: absolute;
        background: #E87722;
        transition: transform 0.3s ease, opacity 0.2s ease;
    }

    /* Thanh ngang */
    &::before {
        top: 50%;
        left: 0;
        width: 16px;
        height: 2px;
        transform: translateY(-50%);
    }

    /* Thanh dọc */
    &::after {
        top: 50%;
        left: 7px;
        width: 2px;
        height: 16px;
        transform: translateY(-50%);
    }

    &:hover {
        color: #E87722;
    }
`;

export const FooterMenuSidebar = styled.div`
    border-top: 1.5px solid #000;
    padding: 10px 0;
    
    p{  
        font-size: 1.1rem;
        font-weight: 300;
        padding: 0 30px;
    }
`;

// Nav
export const NavbarContent = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    border-bottom-left-radius: 40px;
    padding-left: 32px;
    z-index: 1001;
    box-shadow: -0.5px 0.5px 1px #000;
`;

export const NavbarContentMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding: 28px;
`;

export const NavbarContentText = styled(Link)`
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;

    &:not(:first-child){
        margin-left: 36px;
    }

    &: hover {
        color: #E87722;
    }

    @media (${media.xl}) {
        display: none;
    }
`;

export const NavbarButton = styled.button`
    padding: 6px 16px !important;
    font-size: 1.6rem;
    font-weight: 300;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #0070f3;
    color: white;
    
    &:hover {
        background-color: #005bb5;
    }
        
    &:active {
        transform: scale(0.98);
    }
`; 

export const NavbarMenuSearch = styled.div`
    position: relative;
    display: inline-block;
`; 

export const MenuCheckedSearch = styled.label<{ $checked: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #fff;

  svg {
    font-size: 2rem;
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #E87722;
  }
`;

//Sidebar search
export const SidebarSearch = styled.div<{ $open: boolean }>`
    position: absolute;
    top: 0;
    right: 0;            
    width: 100%;
    height: 30vh;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    border-radius: 60px;
    z-index: 1003;

    opacity: ${(p) => (p.$open ? 1 : 0)};
    pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
    transform: ${(p) => (p.$open ? 'translateY(0)' : 'translateY(-8px)')};
    transition: opacity 0.2s ease, transform 0.2s ease;

    padding: 20px 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;

    @media (${media.xl}) {
        height: 100vh;
        padding: 20px 60px;
    }
`;

export const SidebarSearchDiv = styled.div`
    width: 100%;

    h3{
        font-size: 3.2rem;
        font-weight: 300;
        color: #E87722;
    }

    p{
        margin-top: 20px;
        font-size: 1.4rem;
        font-weight: 300;
        color: #E87722;
    }
`;

export const SearchFormDiv =  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border: 1px solid #000;
    border-radius: 28px;
    box-sizing: border-box;
    background: #f6f6f6;
    transition: box-shadow 0.2s, transform 0.15s;
    margin-top: 20px;

    &:focus-within{
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }
    
    svg{
        width: 28px;
        height: 28px;
        color: #666;
        flex: 0 0 auto;
    }

    input{
        font-size: 1.6rem;
        color: #333;
        margin: 0;
        outline: none;
        border: none;
        background: transparent;
        flex: 1 1 auto;
        min-width: 0;

        &::placeholder{
            color: rgba(0, 0, 0, 0.35);
        }
    }
`;

export const SidebarSearchDivDelete = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 0;

    // Tạo dấu X bằng 2 thanh xoay
    &::before,
    &::after {
        content: "";
        position: absolute;
        background: #E87722;
        transition: all 0.3s ease;
    }

    // Thanh 1 (xoay 45 độ)
    &::before {
        width: 30px;
        height: 2px;
        transform: rotate(45deg);
    }

    // Thanh 2 (xoay -45 độ)
    &::after {
        width: 30px;
        height: 2px;
        transform: rotate(-45deg);
    }

    &:hover {
        &::before,
        &::after {
            background: #000;
        }
    }
`;