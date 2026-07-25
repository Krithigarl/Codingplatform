import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const WelcomePanel = ({ isLogin, setIsLogin }) => {

    return (
        <div className="left-panel">
            <motion.h1 animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} >
                🤖 AI Coding Platform
            </motion.h1>
            <p> Learn Programming with AI Practice Coding Build Projects Track Progress </p>
            <Button onClick={() => setIsLogin(!isLogin)} className="login-btn bg-black">
                {isLogin ? "Create Account" : "Sign In"}
            </Button>
        </div>
    )
}

export default WelcomePanel;