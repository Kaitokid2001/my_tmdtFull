import styled from "styled-components";
import Link from 'next/link';

import { media } from './breakpoints';

export const NotFoundDivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (${media.xl}) {
        flex-direction: column;
    }
`;

export const NotFoundDivImg = styled.div`
    
`;

export const NotFoundContentText = styled.div`
    margin: 0 40px;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
`;

export const NotFoundContentTextH1 = styled.h1`
    font-size: 6em;
`;

export const NotFoundContentTextP = styled.p`
    font-size: 3em;
    font-weight: bold;
    color: red;
`;

export const NotFoundContentTextSmall = styled.small`
    font-size: 1.6em;
    color: #444;
`;

export const NotFoundContentLink = styled(Link)`
    --button-bg: #0070f3;
    --button-bg-hover: #005bb5;
    --button-text: white;
  
    /* Giống button */
    margin-top: 20px;
    display: inline-block;
    padding: 14px 28px;
    background-color: var(--button-bg);
    color: var(--button-text);
    text-align: center;
    text-decoration: none;
    font-size: 1.6em;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  
  /* Hover - Button nổi lên */
  &:hover {
    background-color: var(--button-bg-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 118, 255, 0.4);
  }
  
  /* Focus - Có outline */
  &:focus {
    outline: 2px solid var(--button-bg);
    outline-offset: 2px;
  }
  
  /* Active - Button bị nhấn */
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 118, 255, 0.3);
  }
`;