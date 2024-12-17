import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderBeforeLogin";
import Footer from "./components/Footer";
import './file_css/Index.css';

const Signup = () => {
  return (
    <div className="signup-page">
       {/* header */}
       <Header />

      <section>
        <div className="signup-title">
          <h1>Buat Akun</h1>
        </div>
        <div className="container">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Masukan Nama Anda" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Masukan Email Anda" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Masukan Nomor Telepon Anda" />

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Masukan Kata Sandi Anda" />
              </div>
              <div className="form-column">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Masukan Konfirmasi Kata Sandi Anda" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" name="gender" placeholder="Masukan Gender Anda" />
              </div>
              <div className="form-column">
                <label htmlFor="birthdate">Birth Date</label>
                <input type="date" id="birthdate" name="birthdate" placeholder="Masukan Tanggal Lahir Anda" />
              </div>
            </div>

            <div className="checkbox-label">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms" className="terms">
                Dengan mendaftar ke ayune, Anda telah menyetujui <a href="#">syarat &amp; ketentuan</a> dan <a href="#">kebijakan privasi</a>
              </label>
            </div>
            <br />
            <Link to="/HomeAfterLogin" className="btn">Mendaftar</Link>
          </form>
        </div>
      </section>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
