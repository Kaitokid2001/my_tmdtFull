import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
    display: flex;
    flex-decoration: row;
    width: 100%;
    position: absolute;
`;

export const NavbarMenuHidden = styled.div`
    position: relative;
    display: inline-block;
    width: 150px;
`;

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
        ? 'translate(-50%, -50%) rotateY(180deg)'
        : 'translate(-50%, -50%)'};
    transform-origin: center center;
    cursor: pointer;
    transition: 0.5s;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover .bar {
        box-shadow: 0 0 25px 0 rgba(255, 255, 255, 0.5);
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
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      margin-top: -15px;
      transform: rotate(45deg);
      transform-origin: center;
    }
  `}
`;

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

