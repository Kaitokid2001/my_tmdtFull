'use client'

import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { 
  FooterContainer, 
  FooterContent,
  FooterDivShareIcon,
  FooterShareIcon,
  FooterIconLink,
  FooterCopyright,
 } from "../styles/styleFooter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/kiethuynh0904/" },
    { icon: Instagram, url: "https://www.instagram.com/kiet_h.63/" },
    { icon: Twitter, url: "https://www.twitter.com/" },
    { icon: LinkedIn, url: "https://www.linkedin.com/in/ki%E1%BB%87t-hu%E1%BB%B3nh-240123398/" },
  ];

  return (
    <FooterContainer>
      <FooterContent></FooterContent>
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