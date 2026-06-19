import styled from "styled-components";
import Link from "next/link";

import { media } from './breakpoints';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #dbdfe1;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 200px;
    margin: 20px 0;

    @media (${media.xl}) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 100px;
    }
    
    @media (${media.md}) {
        flex-direction: column;
    }
`;

export const FooterContentRow = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

export const FooterContentRowTitle = styled.h1`
    font-size: 1.8rem;
    color: #E87722;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-weight: 500;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #e91e63;
        height: 2px;
        box-sizing: border-box;
        width: 3em;
    }
`;

export const FooterContentRowUlItem = styled.ul`
    list-style: none;
    padding-top: 10px;
`;


export const FooterContentRowLiItem = styled.li`
    font-size: 1.4rem;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

export const FooterContentRowItem = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover{
        color: #E87722;
    }
`;

export const FooterDivShareIcon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1.5px solid #000;
    gap: 10px;
    padding: 10px 0;
`;

export const FooterIconLink = styled(Link)`
    color: inherit;
`;

export const FooterShareIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 8px;

    ${FooterIconLink}{
        font-size: 0.8em;
        margin: 0 20px;
        svg,
        icon {
            color: #E87722;
            font-size: 3em;
        };
    }
`;

export const FooterCopyright = styled.p`
    text-align: center;
    font-size: 1em;
    color: #E87722;
`;