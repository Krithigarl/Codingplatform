import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import WelcomePanel from "../components/WelcomePanel";

const Auth=()=> {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container fluid className="auth-page">
            <Row className="justify-content-center align-items-center vh-100">
                <Col lg={10}>
                    <div className="auth-card">
                        <Row className="g-0">
                            <Col lg={5}>
                                <WelcomePanel isLogin={isLogin} setIsLogin={setIsLogin} />
                            </Col>
                            <Col lg={7}>
                                <motion.div key={isLogin} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
                                    {isLogin ? <LoginForm /> : <RegisterForm />}</motion.div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;