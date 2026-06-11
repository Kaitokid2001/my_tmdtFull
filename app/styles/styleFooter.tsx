

import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
`;

export const FooterContent = styled.div`

`;

export const FooterDivShareIcon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1.5px solid #000;
    gap: 10px;
`;

export const FooterIconLink = styled.a`
    color: inherit;
`;

export const FooterShareIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

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