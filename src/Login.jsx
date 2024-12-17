import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/HeaderBeforeLogin";
import Footer from "./components/Footer";
import "./file_css/Login.css";

const Login = () => {
  return (
    <div className="Login-page">
      {/* header */}
      <Header />

      <div className="container">
        <div className="main">
          {/* Login Section */}
          <div className="login">
            <h2 className="selamat">Selamat Datang Kembali</h2>
            <form>
              <p>E-mail</p>
              <input type="email" placeholder="Input your email" />
              <p>Kata sandi</p>
              <input type="password" placeholder="Input your password" />

              <Link to="/forgotpass" className="forgot-password">
                Lupa Password anda? Klik di sini
              </Link>
              <Link to="/Loginadmin" className="login-admin">
                Login sebagai Admin
              </Link>

              <Link to="/HomeAfterLogin" className="btn">
                MASUK
              </Link>
            </form>
          </div>
          <div className="divider"></div> {/* Divider line */}
          {/* Signup Section */}
          <div className="signup">
            <h2 className="subtext">"Mari kita mulai perjalanan kulit anda"</h2>
            <h2 className="buat">Buat Akun Anda</h2>
            <Link to="/signup" className="btn">
              MENDAFTAR
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
