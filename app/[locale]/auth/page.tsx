"use client";

import { Link } from "@/i18n/navigation";
import FuncLoginFrom from "@/components/FuncLoginFrom";
import FuncButtonLoginOrder from "@/components/FuncButtonLoginOther"

import {
    Container,
    Separation,
} from "@/styles/styleAuth";

export default function Auth(){
    return(
        <Container>
            <h2>Login with</h2>
            <FuncButtonLoginOrder/>
            <Separation><span>or</span></Separation>
            <FuncLoginFrom/>
                <p>Don &apos; t have a account ? <Link href="/register">Register now</Link></p>
        </Container>
    )
}