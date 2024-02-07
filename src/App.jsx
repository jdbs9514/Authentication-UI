import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/sign up" element={<SignUp />} />
          <Route path="/forgot password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  )
}

export default App