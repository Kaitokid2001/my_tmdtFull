'use client'

import Image from "next/image";
import { 
    NotFoundDivContainer,
    NotFoundContentText,
    NotFoundContentTextH1,
    NotFoundContentTextP,
    NotFoundContentTextSmall,
    NotFoundContentLink
 } from "../styles/styleNotFound";


export default function NotFound() {
  return (
    <NotFoundDivContainer>
        <NotFoundContentText>
            <Image src="/bg.jpg" alt="404 Error" width={600} height={400} />
        </NotFoundContentText>
        <NotFoundContentText>
          <NotFoundContentTextH1>Oops!</NotFoundContentTextH1>
          <NotFoundContentTextP>Something went wrong.</NotFoundContentTextP>
          <NotFoundContentTextSmall>
            Looks like the page you are looking for is currentlyunavailable.
          </NotFoundContentTextSmall>
          <NotFoundContentLink href="/">Go back home</NotFoundContentLink>
        </NotFoundContentText>
    </NotFoundDivContainer>
  );
}