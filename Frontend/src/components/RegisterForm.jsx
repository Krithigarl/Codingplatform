import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";

const RegisterForm = () => {
    const [registerData, setRegisterData]=useState({
        fullname:"",
        email:"",
        password:""
    })
    const updateData = (e)=>{
        const{name,value}=e.target;
        setRegisterData((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`register Sucessfully your email is ${registerData.email}`)

    }

    return (
        <div className="form-section">
            <h2>Create Account</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>
                        <FaEnvelope /><span className="ps-3">Full Name</span>
                    </Form.Label>
                    <Form.Control type="text" name="fullname" value={registerData.fullname} onChange={updateData} placeholder="Enter your email" />
                </Form.Group>
               <Form.Group className="mb-3">
                    <Form.Label>
                        <FaEnvelope /><span className="ps-3">Email</span>
                    </Form.Label>
                    <Form.Control type="email" name="email" value={registerData.email} onChange={updateData} placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>
                        <FaLock /><span className="ps-3">Password</span>
                    </Form.Label>
                    <Form.Control type="password" name="password" value={registerData.password} onChange={updateData} placeholder="Password" />
                </Form.Group>
                <Button className="w-100 login-btn" type="submit"> Register </Button>
            </Form>
        </div>
    )
}

export default RegisterForm;