"use client";

import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from "next-intl";
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
  const t = useTranslations("auth");
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
          placeholder={t('login.inputEmail')}
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
          placeholder={t('login.inputPassword')}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {password && (
          <EyeButton
            type="button"
            aria-label="Clear password"
            onClick={() => setPassword("")}
            title="Clear password"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </EyeButton>
        )}

        <EyeButton
          type="button"
          aria-label={openEye ? "Hide password" : "Show password"}
          onClick={() => setOpenEye((s) => !s)}
          title={openEye ? "Hide password" : "Show password"}
        >
          <FontAwesomeIcon icon={openEye ? faEyeSlash : faEye} />
        </EyeButton>
      </InputWrapper>

      <LinkText href="/recoverPassword">{t('login.forgotPassword')}</LinkText>

      <LoginButton type="submit">{t('login.loginNow')}</LoginButton>
    </Form>
  );
}
