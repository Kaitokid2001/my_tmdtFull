'use client'


import GoogleMapSection from "./GoogleMapSection";
import { useTranslations } from "next-intl";

import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { 
  FooterContainer, 
  FooterContent,
  FooterContentRow,
  FooterContentRowTitle,
  FooterContentRowUlItem,
  FooterContentRowLiItem,
  FooterContentRowItem,
  FooterDivShareIcon,
  FooterShareIcon,
  FooterIconLink,
  FooterCopyright,
 } from "../styles/styleFooter";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/kiethuynh0904/" },
    { icon: Instagram, url: "https://www.instagram.com/kiet_h.63/" },
    { icon: Twitter, url: "https://www.twitter.com/" },
    { icon: LinkedIn, url: "https://www.linkedin.com/in/ki%E1%BB%87t-hu%E1%BB%B3nh-240123398/" },
  ];
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentRow>
          <FooterContentRowTitle>{t('company.header')}</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/about">{t('company.aboutUs')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/services">{t('company.ourServices')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/privacy">{t('company.privacyPolicy')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/affiliate">{t('company.affiliateProgram')}</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>{t('getHelp.header')}</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/faq">{t('getHelp.fAQ')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/shipping">{t('getHelp.shipping')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/returns">{t('getHelp.returns')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/order-status">{t('getHelp.orderStatus')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/payment-options">{t('getHelp.paymentOptions')}</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>{t('onlineShop.header')}</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/watch">{t('onlineShop.watch')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/bag">{t('onlineShop.bag')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/shoes">{t('onlineShop.shoes')}</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/dress">{t('onlineShop.dress')}</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>{t('location.header')}</FooterContentRowTitle>
          <GoogleMapSection/>
        </FooterContentRow>
      </FooterContent>
      <FooterDivShareIcon>
        <FooterShareIcon>
          {socialLinks.map((item, index) => (
            <FooterIconLink
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon/>
            </FooterIconLink>
          ))}
        </FooterShareIcon>
        <FooterCopyright>
          {t('location.topTitle')} &copy; {currentYear} {t('location.endTitle')}
        </FooterCopyright>
      </FooterDivShareIcon>
    </FooterContainer>
  );
}