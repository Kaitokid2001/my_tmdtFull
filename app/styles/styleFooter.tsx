import styled from "styled-components";
import Link from "next/link";

import { media } from './breakpoints';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 250px;
    margin: 20px 0;

    @media (${media.xl}) {
        flex-direction: column;
        gap: 40px;
        margin: 0;
    }
`;

export const FooterContentRow = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterContentRowTitle = styled.h1`
    margin-bottom: 20px;    
`;

export const FooterContentRowUlItem = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;


export const FooterContentRowLiItem = styled.li`
    padding: 10px 0;
    font-size: 16px;
`;

export const FooterContentRowItem = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const FooterDivShareIcon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1.5px solid #000;
    gap: 10px;
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
        font-size: 20px;
        margin: 0 20px;
        svg,
        icon {
            font-size: 30px;
        };
    }
`;

export const FooterCopyright = styled.p`
    text-align: center;
    font-size: 12px;
`;