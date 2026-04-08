import axios from "axios";
import { useState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { API_MEMBER_URL } from "../config/config";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        general: "",
    });

    const navigate = useNavigate();

    const SingUpAction = async (event: React.SubmitEvent) => {
        event.preventDefault();
        const url = `${API_MEMBER_URL}/signup`;
        const config = { withCredentials: true };
        const paramters = { name, email, password, address };
        await axios.post(url, paramters, config).then((response) => {
            if (response.status === 200) {
                alert(response.data.name + "님의 회원 가입 완료. \n " + "이메일 : " + response.data.email + "\n 주소 : " + response.data.address);
                navigate(`/member/login`);
            }
        }).catch((error) => {
            if (axios.isAxiosError(error)) {
                if (error.response?.data) {
                    // 서버에서 받은 오류 정보를 객체로 저장합니다.
                    setErrors(error.response.data);
                    console.log(error.response.data);
                }
            }
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <Row className="w-100 justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">회원 가입</h2>

                            {/* 일반 오류 발생시 사용자에게 alert 메시지를 보여 줍니다. */}
                            {/* contextual : 상황에 맞는 적절한 스타일 색상을 지정하는 기법 */}
                            {errors.general && <Alert variant="danger">{errors.general}</Alert>}

                            {/*
                                !! 연산자는 어떠한 값을 강제로 boolean 형태로 변환해주는 자바스크립트 기법입니다.

                                isInvalid 속성은 해당 control의 유효성을 검사하는 속성입니다.
                                값이 true이면 Form.Control.Feedback에 빨간 색상으로 오류 메시지를 보여 줍니다.
                            */}
                            <Form onSubmit={SingUpAction}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}>
                                        이름
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="text"
                                            placeholder="이름을 입력해 주세요"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}>
                                        이메일
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="email"
                                            placeholder="이메일을 입력해 주세요"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}>
                                        비밀번호
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="password"
                                            placeholder="비밀번호를 입력해 주세요"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            isInvalid={!!errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={3}>
                                        주소
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="text"
                                            placeholder="주소를 입력해 주세요"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            isInvalid={!!errors.address}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.address}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        회원 가입
                                    </button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default App;
