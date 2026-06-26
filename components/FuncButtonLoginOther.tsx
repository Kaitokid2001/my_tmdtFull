"use client";

import Image from "next/image";

import {
  SocialDivButton,
  SocialButton,
} from "@/styles/styleAuth";

export default function FuncButtonLoginOrder() {
  return (
    <SocialDivButton>
      <SocialButton>
        <Image src="/google.png" alt="404 Error" width={32} height={32} />
        <p>Google</p>
      </SocialButton>
      <SocialButton>
        <Image src="/apple.png" alt="404 Error" width={32} height={32} />
        <p>Apple</p>
      </SocialButton>
    </SocialDivButton>
  );
}
