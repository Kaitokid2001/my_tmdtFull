"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import {
    Button,
    Container,
    Form,
    Input,
    InputGroup,
    InputWrapper,
    Label,
    Subtitle,
    Title,
    Wrapper,
} from "@/styles/styleRecoverPassword";

export default function RecoverPassword() {
    const t = useTranslations("auth");
    const [form, setForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
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
                    <Title>{t('recoverPassword.header')}</Title>
                    <Subtitle>{t('recoverPassword.p')}</Subtitle>

                    <InputGroup>
                        <Label htmlFor="oldPassword">{t('recoverPassword.oldPassword')}</Label>
                        <InputWrapper>
                            <Input
                                id="oldPassword"
                                type={showOldPassword ? "text" : "password"}
                                placeholder={t('recoverPassword.importOldPassword')}
                                value={form.oldPassword}
                                onChange={handleChange("oldPassword")}
                            />
                            {form.oldPassword ? (
                                <button type="button" aria-label="Xóa mật khẩu cũ" onClick={() => clearField("oldPassword")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                            <button type="button" aria-label={showOldPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowOldPassword((prev) => !prev)}>
                                <FontAwesomeIcon icon={showOldPassword ? faEyeSlash : faEye} />
                            </button>
                        </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="newPassword">{t('recoverPassword.newPassword')}</Label>
                        <InputWrapper>
                            <Input
                                id="newPassword"
                                type={showNewPassword ? "text" : "password"}
                                placeholder={t('recoverPassword.importNewPassword')}
                                value={form.newPassword}
                                onChange={handleChange("newPassword")}
                            />
                            {form.newPassword ? (
                                <button type="button" aria-label="Xóa mật khẩu mới" onClick={() => clearField("newPassword")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                            <button type="button" aria-label={showNewPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowNewPassword((prev) => !prev)}>
                                <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                            </button>
                        </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="confirmPassword">{t('recoverPassword.re-enterTheNewPassword')}</Label>
                        <InputWrapper>
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder={t('recoverPassword.importRe-enterTheNewPassword')}
                                value={form.confirmPassword}
                                onChange={handleChange("confirmPassword")}
                            />
                            {form.confirmPassword ? (
                                <button type="button" aria-label="Xóa nhập lại mật khẩu" onClick={() => clearField("confirmPassword")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                            <button type="button" aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </InputWrapper>
                    </InputGroup>

                    <Button type="submit">{t('recoverPassword.savePassword')}</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}
