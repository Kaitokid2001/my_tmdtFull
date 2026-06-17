import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
    display: flex;
    flex-decoration: row;
    width: 100%;
    position: absolute;
`;

export const InputOpen = styled.input.attrs({ type: 'checkbox' })`
    width: 100%;
    height: 5px;
    padding 0;
    margin: 0;
    appearance: none;
    background-color: #333;
    border-radius: 9999px;
    outline: none;
    pointer-event: none;
    transition: opacity 200ms ease-in-out, width 200ms ease-in-out,
        rotate 200ms ease-in-out, translate 200ms ease-in-out,
        background-color 200ms ease-in-out;
        
    &:checked{
        opacity: 0;
        width: 0;
        transform-origin: left center; 
    }
`

export const NavbarMenuHidden = styled.div`
    padding: 32px 46px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavbarContent = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    border-bottom-left-radius: 8px;
    padding-left: 32px;
`;

export const NavbarContentMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
    padding: 28px;
`;

export const NavbarContentText = styled(Link)`
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;

    &: hover {
        color: #E87722;
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

