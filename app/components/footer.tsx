'use client'

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

 interface Coordinate {
  lat: number;
  lng: number;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/kiethuynh0904/" },
    { icon: Instagram, url: "https://www.instagram.com/kiet_h.63/" },
    { icon: Twitter, url: "https://www.twitter.com/" },
    { icon: LinkedIn, url: "https://www.linkedin.com/in/ki%E1%BB%87t-hu%E1%BB%B3nh-240123398/" },
  ];
  const hcmcLocation: Coordinate = {
    lat: 10.827944,
    lng: 10.756667,
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentRow>
          <FooterContentRowTitle>Company</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/about">About Us</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/services">Our Services</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/privacy">Privacy Policy</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/affiliate">Affiliate Program</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>Get Help</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/faq">FAQ</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/shipping">Shipping</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/returns">Returns</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/order-status">Order Status</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/payment-options">Payment Options</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>Online Shop</FooterContentRowTitle>
          <FooterContentRowUlItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/watch">Watch</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/bag">Bag</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/shoes">Shoes</FooterContentRowItem></FooterContentRowLiItem>
            <FooterContentRowLiItem><FooterContentRowItem href="/dress">Dress</FooterContentRowItem></FooterContentRowLiItem>
          </FooterContentRowUlItem>
        </FooterContentRow>
        <FooterContentRow>
          <FooterContentRowTitle>Location Shop</FooterContentRowTitle>

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
          Copyright &copy; {currentYear} All rights reserved.
        </FooterCopyright>
      </FooterDivShareIcon>
    </FooterContainer>
  );
}