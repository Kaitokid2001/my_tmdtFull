"use client";

import { Link } from "@/i18n/navigation";
import FuncLoginFrom from "@/components/FuncLoginFrom";
import FuncButtonLoginOrder from "@/components/FuncButtonLoginOther";
import { useTranslations } from "next-intl";

import { Container, Wrapper, Separation } from "@/styles/styleAuth";

export default function Auth() {
  const t = useTranslations("auth");

  return (
    <Container>
      <Wrapper>
        <h2>{t('login.header')}</h2>
        <FuncButtonLoginOrder />
        <Separation>
          <span>or</span>
        </Separation>
        <FuncLoginFrom />
        <p>
          {t('login.p')}{" "}
          <Link href="/register">{t('login.registerNow')}</Link>
        </p>
      </Wrapper>
    </Container>
  );
}
