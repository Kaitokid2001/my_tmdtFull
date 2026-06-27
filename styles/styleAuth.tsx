import styled from "styled-components";
import { media } from './breakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height:100vh;
    background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);

    h2{
        text-align: center;
        font-size: 3.4rem;
        font-weight: 600;
        margin-bottom: 1.87rem;
    }

    p {
        font-weight: 500;
        margin: 20px 0 10px;
        font-size: 1.8rem;
    }

    a {
        color: #E87722;
        font-weight: 500;
        text-decoration: none;
        font-size: 1.8rem;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export const Wrapper = styled.div`
    width: 1000px;

    @media (${media.lg}) {
        width: 100vw;
    }
`;

export const SocialDivButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    justify-content: center;
`;

export const SocialButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 0;
    gap: 15px;
    background: #F9F8FF;
    border-radius: 10px;
    border: 1px solid #E87722;
    
    p {
        font-size: 2rem;
    }

    &: hover{
        background: #E87722;
        color: white;
        border: none;
    }
`;

export const Separation = styled.p`
    margin: 1.5rem 0;
    text-align: center;
    position: relative;
    width: 100%;

    span {
        position: relative;
        z-index: 1;
        background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);
        padding: 0 0.9rem;
        font-size: 1.6rem;
        font-weight: 500;
    }

    &::after{
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background: #000;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f6f7fb;
  border-radius: 10px;
  padding: 10px 12px;
  
  &:focus-within {
    border: 1px solid #E87722;
  }
`;

export const IconLeft = styled.div`
  color: #E87722;
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const StyledInput = styled.input<{ hasLeft?: boolean }>`
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  font-size: 1.6rem;
  color: #1f2340;
  padding : 10px 0 10px 0;

  &::placeholder {
    color: #9aa0be;
  }
`;

export const EyeButton = styled.button`
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
`;

export const LinkText = styled.a`
  font-size: 1.3rem;
  color: #5561f6;
  text-decoration: none;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 54px;
    cursor: pointer;
    outline: none;
    font-size: 2.4rem;
    background: #E87722;
    color: #fff;
    margin-top: 2.2rem;
    border-radius: 1rem;
    border: 1px solid #fff;

    &:active {
        border: 1px solid #E87722;
        background: #fff;
        color: #000;
    }
`;