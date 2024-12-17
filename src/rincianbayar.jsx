import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePayment } from "./PaymentContext";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/rincianbayar.css";

const Rincianbayar = () => {
  const { totalPayment, setTotalPayment } = usePayment();
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { expert } = location.state || {}; 
  
  const handleNext = () => { navigate('/opsibayar', { state: { expert } }); };

  const serviceFee = 2000;
  const totalPrice = expert ? expert.price + serviceFee : 0;

  useEffect(() => { 
    if (expert) { 
      setTotalPayment(totalPrice); 
    } 
  }, [expert, totalPrice, setTotalPayment]); 
  
  if (!expert) { 
    return <p>Data ahli tidak ditemukan.</p>; 
  }
  return (
    <div className="rincianbayar-page">
      <Header />
      
      <div className="bayar-page">
        <main className="payment-details">
          <div className="title">
            <h1>Rincian Pembayaran</h1>
          </div>
          <div className="card">
            <div className="doctor-info">
              <img
                src={`assets/images/expert${expert.id}.png`}
                alt={expert.name}
                className="doctor-photo"
              />
              <div className="doctor-details">
                <strong>{expert.name}</strong>
                <p>Spesialis {expert.specialty}</p>
              </div>
            </div>
            <div className="price-info">
              <p>Biaya sesi 30 menit</p>
              <span>Rp {expert.price.toLocaleString()}</span>
            </div>
            <div className="price-info">
              <p>Biaya layanan</p>
              <span>Rp {serviceFee.toLocaleString()}</span>
            </div>
            <div className="total-price">
              <strong>Total Pembayaranmu</strong>
              <span>Rp {totalPrice.toLocaleString()}</span>
            </div>
            <button className="pay-button" onClick={handleNext}>Bayar Sekarang</button>
          </div>
        </main>
      </div>

      <div className="footer-separator"></div>
      <Footer />
    </div>
  );
};

export default Rincianbayar;
