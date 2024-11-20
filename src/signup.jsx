import React from 'react';
import { Link } from 'react-router-dom';
import './file_css/Index.css'; // Ensure the CSS path is correct

const Signup = () => {
  return (
    <div className="signup-page">
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeBeforeLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs">TENTANG KAMI</Link></li>
            <li><Link to="/#">PRODUK</Link></li>
            <li><Link to="/#">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/Login"><button>Masuk</button></Link>
        </div>
      </header>

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

      {/* footer */}
      <footer className="aboutus-footer">
        <div className="footer-separator"></div>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
          </div>
          <div className="footer-content">
            <div className="customer-care">
              <h3>Layanan Pelanggan</h3>
              <p>Whatsapp: +62-851-6564-4356</p>
              <p>Instagram: @ayunneconsultation</p>
              <p>Email: ayunneconsultation@gmail.com</p>
              <p>
                <strong>Jam operasional:</strong><br />
                Senin-Jumat: 10:00 - 21:00 WIB<br />
                Sabtu: 10:00 - 17:00 WIB
              </p>
            </div>
            <div className="account">
              <h3>Akun Saya</h3>
              <p><Link to="/#">Profil</Link></p>
              <p><Link to="/signup">Daftar</Link></p>
              <p><Link to="/Login">Masuk</Link></p>
            </div>
            <div className="social-media">
              <h3>Ikuti Kami:</h3>
              <div className="social-icons">
                <a href="#"><img src="assets/images/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="assets/images/twt.png" alt="Twitter" /></a>
                <a href="#"><img src="assets/images/yt.png" alt="YouTube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©AYUNNE, 2024. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
