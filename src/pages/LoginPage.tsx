import { useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import type { LoginResponse, User } from "../types/User.ts";
import axios from "axios";
import { API_MEMBER_URL } from "../config/config.tsx";

interface Props {
    onLogin: (user: User) => void;
}

function Login({ onLogin }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('로그인 시도 중...');
        const params = {
            email,
            password
        };
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios.post<LoginResponse>(
            `${API_MEMBER_URL}/login`,
            params, config).then((response) => {
                const { accessToken, ...userData } = response.data;
                localStorage.setItem("accessToken", accessToken);
                if (onLogin) {      //로그인 처리(함수 또는 상태)가 정의되어 있다면 ~을 해라
                    onLogin(userData);
                    localStorage.setItem("user", JSON.stringify(userData));
                }
                navigate("/");
            }).catch((error) => {
                console.error("로그인 실패:", error);
                setErrors("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
            })
    };
    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
            <Row className="w-100 justify-content-center">
                <Col md={6} sm={10}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">로그인</h2>

                            {errors && <Alert variant="danger">{errors}</Alert>}

                            <Form onSubmit={handleLogin}>
                                <Form.Group as={Row} className="mb-3 align-items-center">
                                    <Form.Label column sm={3} className="text-end fw-bold text-primary">
                                        이메일
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="email"
                                            placeholder="이메일을 입력해 주세요."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 align-items-center">
                                    <Form.Label column sm={3} className="text-end fw-bold text-primary">
                                        비밀 번호
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="password"
                                            placeholder="비밀 번호를 입력해 주세요."
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Col>
                                </Form.Group>

                                <Row className="g-2">
                                    <Col xs={8}>
                                        <Button variant="primary" type="submit" className="w-100">
                                            로그인
                                        </Button>
                                    </Col>
                                    <Col xs={4}>
                                        <Link to="/member/signup" className="btn btn-outline-secondary w-100">
                                            회원 가입
                                        </Link>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
