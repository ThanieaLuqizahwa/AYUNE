import React from 'react';
import { Link } from 'react-router-dom';
import './file_css/qr.css'; // Make sure the CSS path is correct
// import { qr } from '@fortawesome/free-solid-svg-icons';

const qr = () => {
  return (
    <div className="qr-page-container">
      <header>
        <div className="logo">
          <img src="assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="Produk">PRODUK</Link></li>
            <li><Link to="/Ahli">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>

      <main>
        <div className="title">
            <h1>Ayo Bayar</h1>
        </div>

        <div className="total">
            <div className="grid-kiri">
                <h4>Total Tagihan</h4>
                <h2>Pembayaranmu</h2>
            </div>
            <div className="grid-kanan">
                <h4>Rp77.000</h4>
                <h2>Rp77.000</h2>   
            </div>    
        </div>
        
        <div className="qr-code-section">
            <p>Mohon pastikan Anda telah membaca dan memahami <a href="#">Syarat & Ketentuan</a> serta <a href="#">Kebijakan Privasi</a> kami sebelum melanjutkan pembayaran. Setelah pembayaran berhasil, transaksi dianggap final dan tidak dapat dikembalikan.</p>
            <a Link="/consul" onclick="showQrPopup()"><img src="assets/images/qr.png" alt="QR Code"/></a>
            <p Link="/consul">SCAN UNTUK BAYAR</p>
        </div>
        <div className="qr-code-section">
        <Link to="/consul"><button type="button" className="copy-btn">SALIN BARCODE</button></Link>
        </div>
    </main>

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

export default qr;
