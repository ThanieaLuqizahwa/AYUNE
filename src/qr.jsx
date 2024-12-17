import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { usePayment } from "./PaymentContext";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/qr.css";

const QR = () => {
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol pop-up 
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { expert } = location.state || {}; 
  const { totalPayment } = usePayment(); // Ambil totalPayment dari Context

  // Fungsi untuk menampilkan pop-up
  const handleCopyClick = () => {
    setShowPopup(true); // Menampilkan pop-up
  };

  // Fungsi untuk mengarahkan pengguna ke halaman konsultasi setelah pembayaran berhasil
  const handleRedirect = () => { 
    navigate("/consul", { state: { expert } }); // Mengarahkan ke halaman consul 
  };

  return (
    <div className="qr-page-container">
      {/* Header */}
      <Header />

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
            <h4>Rp {totalPayment.toLocaleString()}</h4>
            <h2>Rp {totalPayment.toLocaleString()}</h2>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="qr-code-section">
          <p>
            Mohon pastikan Anda telah membaca dan memahami{" "}
            <a href="#">Syarat & Ketentuan</a> serta{" "}
            <a href="#">Kebijakan Privasi</a> kami sebelum melanjutkan pembayaran. Setelah pembayaran berhasil, transaksi dianggap final dan tidak dapat dikembalikan.
          </p>
          <div className="qr-wrapper">
            <img src="assets/images/qrfix.jpg" alt="QR Code" />
          </div>
          <p>SCAN UNTUK BAYAR</p>
          <button type="button" className="copy-btn" onClick={handleCopyClick}>
            SALIN BARCODE
          </button>
        </div>
      </main>

      {/* Popup: Menampilkan pop-up saat tombol "SALIN BARCODE" diklik */}
      {showPopup && (
        <div id="secondPopup" className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">Pembayaran Berhasil!</div>
            <div className="popup-title">
              <img
                src="assets/images/iconbayar.png"
                alt="Pembayaran Berhasil"
                className="popup-image"
              />
            </div>
            <div className="popup-button-container">
              <button className="copy-btn" onClick={handleRedirect}>
                Mulai Sesi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QR;
