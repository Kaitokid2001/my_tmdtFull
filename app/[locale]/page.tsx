'use client';

import {PageDiv} from "../../styles/stylePage";
import { useTranslations } from "next-intl";

export default function Home({
  params
}:{
  params: Promise<{locale: string}>
}) {
  const t = useTranslations('homepage');

  return (
    <PageDiv>
      <h1>{t('header')}</h1>
      <h2>cc</h2>
    </PageDiv>
  );
}
