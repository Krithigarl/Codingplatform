import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {

    return (
        <div className="form-section">
            <h2>Welcome Back</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        <FaEnvelope /><span className="ps-3">Email</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>
                        <FaLock /><span className="ps-3">Password</span>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="login-btn w-100">Login</Button>
            </Form>
        </div>
    )
}

export default LoginForm;