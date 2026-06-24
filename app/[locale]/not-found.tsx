'use client'

import Image from "next/image";
import { useTranslations } from "next-intl";
import { 
    NotFoundDivContainer,
    NotFoundContentText,
    NotFoundContentTextH1,
    NotFoundContentTextP,
    NotFoundContentTextSmall,
    NotFoundContentLink
 } from "../../styles/styleNotFound";


export default function NotFound() {
  const t = useTranslations("not-found");
  return (
    <NotFoundDivContainer>
        <NotFoundContentText>
            <Image src="/bg.jpg" alt="404 Error" width={600} height={400} />
        </NotFoundContentText>
        <NotFoundContentText>
          <NotFoundContentTextH1>{t('notFoundContentTextH1')}</NotFoundContentTextH1>
          <NotFoundContentTextP>{t('notFoundContentTextP')}</NotFoundContentTextP>
          <NotFoundContentTextSmall>
            {t('notFoundContentTextSmall')}
          </NotFoundContentTextSmall>
          <NotFoundContentLink href="/">{t('notFoundContentLink')}</NotFoundContentLink>
        </NotFoundContentText>
    </NotFoundDivContainer>
  );
}