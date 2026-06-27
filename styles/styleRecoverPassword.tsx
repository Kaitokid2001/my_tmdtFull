import styled from "styled-components";
import { media } from "./breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background: linear-gradient(135deg, #f9fafb 0%, #fef3c7 100%);
`;

export const Wrapper = styled.div`
    width: 1000px;

    @media (${media.lg}) {
        width: 100vw;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #fff;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
`;

export const Title = styled.h2`
    margin: 0 0 8px;
    text-align: center;
    font-size: 3.4rem;
    font-weight: 600;
    color: #1f2340;
`;

export const Subtitle = styled.p`
    margin: 0 0 8px;
    text-align: center;
    color: #6b7280;
    font-size: 1.6rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: #f6f7fb;
    border-radius: 10px;
    padding: 0 12px;
    border: 1px solid transparent;

    &:focus-within {
        border-color: #E87722;
    }

    button {
        background: transparent;
        border: 0;
        padding: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #7a7f9a;
        cursor: pointer;
        border-radius: 6px;

        &:hover {
            color: #E87722;
        }
    }
`;

export const Label = styled.label`
    font-size: 1.8rem;
    font-weight: 600;
    color: #374151;
`;

export const Input = styled.input`
    flex: 1;
    border: 0;
    outline: none;
    background: transparent;
    font-size: 1.6rem;
    color: #1f2340;
    padding: 20px 0;

    &::placeholder {
        color: #9aa0be;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 54px;
    cursor: pointer;
    outline: none;
    font-size: 2.4rem;
    background: #E87722;
    color: #fff;
    margin-top: 8px;
    border-radius: 1rem;
    border: 1px solid #fff;

    &:active {
        border: 1px solid #E87722;
        background: #fff;
        color: #000;
    }
`;
