"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import {
    Button,
    Container,
    Form,
    FullWidthGroup,
    Input,
    InputGroup,
    InputWrapper,
    Label,
    Row,
    Subtitle,
    Title,
    Wrapper,
} from "@/styles/stylesRegister";

export default function Register() {
    const t = useTranslations("auth");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const clearField = (field: keyof typeof form) => {
        setForm((prev) => ({ ...prev, [field]: "" }));
    };

    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>{t('register.header')}</Title>
                    <Subtitle>{t('register.p')}</Subtitle>

                    <Row>
                        <InputGroup>
                            <Label htmlFor="firstName">{t('register.firstName')}</Label>
                            <InputWrapper>
                                <Input id="firstName" placeholder={t('register.importFirstName')} value={form.firstName} onChange={handleChange("firstName")} />
                                {form.firstName ? (
                                    <button type="button" aria-label="Xóa họ" onClick={() => clearField("firstName")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="lastName">{t('register.importLastName')}</Label>
                            <InputWrapper>
                                <Input id="lastName" placeholder={t('register.lastName')} value={form.lastName} onChange={handleChange("lastName")} />
                                {form.lastName ? (
                                    <button type="button" aria-label="Xóa tên" onClick={() => clearField("lastName")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                    </Row>

                    <Row>
                        <InputGroup>
                            <Label htmlFor="age">{t('register.yearOld')}</Label>
                            <InputWrapper>
                                <Input id="age" type="number" placeholder={t('register.importYearOld')} value={form.age} onChange={handleChange("age")} />
                                {form.age ? (
                                    <button type="button" aria-label="Xóa độ tuổi" onClick={() => clearField("age")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="phone">{t('register.phone')}</Label>
                            <InputWrapper>
                                <Input id="phone" type="tel" placeholder={t('register.importPhone')} value={form.phone} onChange={handleChange("phone")} />
                                {form.phone ? (
                                    <button type="button" aria-label="Xóa số điện thoại" onClick={() => clearField("phone")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                    </Row>

                    <FullWidthGroup>
                        <Label htmlFor="email">{t('register.email')}</Label>
                        <InputWrapper>
                            <Input id="email" type="email" placeholder={t('register.importEmail')} value={form.email} onChange={handleChange("email")} />
                            {form.email ? (
                                <button type="button" aria-label="Xóa email" onClick={() => clearField("email")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                        </InputWrapper>
                    </FullWidthGroup>

                    <FullWidthGroup>
                        <Label htmlFor="password">{t('register.password')}</Label>
                        <InputWrapper>
                            <Input id="password" type={showPassword ? "text" : "password"} placeholder={t('register.importPassword')} value={form.password} onChange={handleChange("password")} />
                            {form.password ? (
                                <button type="button" aria-label="Xóa mật khẩu" onClick={() => clearField("password")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                            <button type="button" aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowPassword((prev) => !prev)}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </InputWrapper>
                    </FullWidthGroup>

                    <FullWidthGroup>
                        <Label htmlFor="confirmPassword">{t('register.re-enterPassword')}</Label>
                        <InputWrapper>
                            <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder={t('register.importRe-enterPassword')} value={form.confirmPassword} onChange={handleChange("confirmPassword")} />
                            {form.confirmPassword ? (
                                <button type="button" aria-label="Xóa nhập lại mật khẩu" onClick={() => clearField("confirmPassword")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                            <button type="button" aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </InputWrapper>
                    </FullWidthGroup>

                    <Button type="submit">{t('register.registerButton')}</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}