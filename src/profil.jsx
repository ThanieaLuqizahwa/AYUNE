import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './file_css/profil.css';

const ProfilePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="profile-page">
      {/* header */}
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="/Produk">PRODUK</Link></li>
            <li><Link to="/Ahli">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
        <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>

      {/* content */}
      <div className="header-divider">
        <span className="header-divider-text">Profil</span>
      </div>
      <div className="luar">

      {/* profil kulit */}
      <div className="profile-container">
        <div className="profile-sidebar">
        <div className="profile-coin-container">
                <div className="profile-picture">
                    <img src="assets/images/emptyprofile.png" alt="Edit Profile"/>
                    <p>Edit Profil</p>
                </div>
                <div className="profile-info">
                    <h3>AYUNE COINS</h3>
                    <p>Saldo &nbsp; <strong>185.000</strong></p>
                </div>
            </div>
          <form className="profile-info">
            <label htmlFor="name">Nama</label>
            <input id="name" type="text" placeholder="Masukan nama anda" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Masukan Email anda" />

            <label htmlFor="phone">Nomor Telepon</label>
            <input id="phone" type="text" placeholder="Masukan Nomor Telepon Anda" />

            <label htmlFor="dob">Tanggal Lahir</label>
            <input id="dob" type="text" placeholder="Masukan Tanggal Lahir Anda (DD/MM/YYYY)" />

            <label htmlFor="gender">Jenis Kelamin</label>
            <input id="gender" type="text" placeholder="Masukan Gender Anda" />

            <button type="button" className="logout-btn" onClick={togglePopup}>
              Keluar Akun
            </button>
          </form>
        </div>

        <div className="profile-main">
          <h1 className="section-title">Profil Kulit</h1>
          <form className="skin-profile">
            <label htmlFor="skinType">Tipe Kulit:</label>
            <textarea id="skinType" placeholder="Kulit Kering"></textarea>

            <label htmlFor="skinConcerns">Masalah Kulit:</label>
            <textarea
              id="skinConcerns"
              placeholder="Kulit saya terasa sangat kering hingga terkelupas (Dryness), Dan juga sensitif (Sensitive Skin)"
            ></textarea>
          </form>
        </div>
      </div>
      </div>
      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
          <div className="popup-header">Anda Yakin Ingin Keluar?</div>
            <div className="popup-button-container">
              <button className="popup-button btn-cancel" onClick={togglePopup}>Batal</button>
              <button className="popup-button btn-exit" onClick={handleLogout}>Keluar</button>
            </div>
          </div>
        </div>
      )}

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
              <p><Link to="/profil">Profil</Link></p>
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

export default ProfilePage;
