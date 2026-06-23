import React from "react";
import styled from "styled-components";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & { fullWidth?: boolean };

export const Select =  styled.select<Props>`
    appearance: base-select;
    background-color: white;
    color: #E87722;
    height: 40px;
    width: 50px;
    border: none;
    font-size: 1.5rem;
    padding-top: 10px;
    text-align: center;
    text-align-last: center;

    &::picker(select){
        appearance: base-select;
        border: 1px solid #fff;
        border-radius: 0.25rem;
        color: #E87722;
        padding: 10px;
        box-shadow: 12px 12px 50px rgba(0,0,0,0.5);
    }

    &::picker-icon {
        color: #E87722;
        font-size: 1rem;
        align-content: center;
        justify-content: center;
        transition: 150ms ease;
    }

    &:open::picker-icon {
        rotate: 180deg;
    }
`

export const Option = styled.option`
    &::checkmark {
        order: 1;
        margin-left: auto;
        
    }

    &:hover{
        color: white;
        background: #E87722
    }
`;