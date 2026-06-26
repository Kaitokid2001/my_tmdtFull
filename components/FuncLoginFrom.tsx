"use client";

import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faEnvelope, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  Form,
  InputWrapper,
  IconLeft,
  StyledInput,
  EyeButton,
  LinkText,
  LoginButton,
} from "@/styles/styleAuth";

export default function FuncLoginFrom() {
  const [openEye, setOpenEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form onSubmit={(e) => { e.preventDefault(); /* handle login */ }}>
      <InputWrapper>
        <IconLeft>
          <FontAwesomeIcon icon={faEnvelope} />
        </IconLeft>
        <StyledInput
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && (
          <EyeButton
            type="button"
            aria-label="Clear email"
            onClick={() => setEmail("")}
            title="Clear email"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </EyeButton>
        )}
      </InputWrapper>

      <InputWrapper>
        <IconLeft>
          <FontAwesomeIcon icon={faLock} />
        </IconLeft>

        <StyledInput
          type={openEye ? "text" : "password"}
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <EyeButton
          type="button"
          aria-label={openEye ? "Hide password" : "Show password"}
          onClick={() => setOpenEye((s) => !s)}
          title={openEye ? "Hide password" : "Show password"}
        >
          <FontAwesomeIcon icon={openEye ? faEyeSlash : faEye} />
        </EyeButton>
      </InputWrapper>

      <LinkText href="/#">Forgot Password ?</LinkText>

      <LoginButton type="submit">Login</LoginButton>
    </Form>
  );
}
