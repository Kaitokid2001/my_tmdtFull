"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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
                    <Title>Tạo tài khoản</Title>
                    <Subtitle>Điền đầy đủ thông tin để bắt đầu sử dụng dịch vụ.</Subtitle>

                    <Row>
                        <InputGroup>
                            <Label htmlFor="firstName">Họ</Label>
                            <InputWrapper>
                                <Input id="firstName" placeholder="Nhập họ" value={form.firstName} onChange={handleChange("firstName")} />
                                {form.firstName ? (
                                    <button type="button" aria-label="Xóa họ" onClick={() => clearField("firstName")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="lastName">Tên</Label>
                            <InputWrapper>
                                <Input id="lastName" placeholder="Nhập tên" value={form.lastName} onChange={handleChange("lastName")} />
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
                            <Label htmlFor="age">Độ tuổi</Label>
                            <InputWrapper>
                                <Input id="age" type="number" placeholder="Nhập độ tuổi" value={form.age} onChange={handleChange("age")} />
                                {form.age ? (
                                    <button type="button" aria-label="Xóa độ tuổi" onClick={() => clearField("age")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <InputWrapper>
                                <Input id="phone" type="tel" placeholder="Nhập số điện thoại" value={form.phone} onChange={handleChange("phone")} />
                                {form.phone ? (
                                    <button type="button" aria-label="Xóa số điện thoại" onClick={() => clearField("phone")}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                ) : null}
                            </InputWrapper>
                        </InputGroup>
                    </Row>

                    <FullWidthGroup>
                        <Label htmlFor="email">Email</Label>
                        <InputWrapper>
                            <Input id="email" type="email" placeholder="Nhập email" value={form.email} onChange={handleChange("email")} />
                            {form.email ? (
                                <button type="button" aria-label="Xóa email" onClick={() => clearField("email")}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            ) : null}
                        </InputWrapper>
                    </FullWidthGroup>

                    <FullWidthGroup>
                        <Label htmlFor="password">Mật khẩu</Label>
                        <InputWrapper>
                            <Input id="password" type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu" value={form.password} onChange={handleChange("password")} />
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
                        <Label htmlFor="confirmPassword">Nhập lại mật khẩu</Label>
                        <InputWrapper>
                            <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Xác nhận mật khẩu" value={form.confirmPassword} onChange={handleChange("confirmPassword")} />
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

                    <Button type="submit">Đăng ký</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}