import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSkinProblem } from "./context/SkinProblemContext"; // Import Context
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/consul.css";

const Consul = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { expert } = location.state || {};
  const { setSkinType, setSkinProblem, setAge } = useSkinProblem();

  const [localSkinType, setLocalSkinType] = useState("");
  const [localSkinProblem, setLocalSkinProblem] = useState("");
  const [localAge, setLocalAge] = useState("");


  console.log("Received Expert:", expert);

  // Function untuk menangkap perubahan input "Masalah Kulit"
  const handleSkinProblemChange = (e) => {
    setSkinProblem(e.target.value); // Simpan ke Context API
  };

  const togglePopup = () => setShowPopup(!showPopup);

  const handleUploadClick = () => {
    setSkinType(localSkinType);
    setSkinProblem(localSkinProblem);
    setAge(localAge);
    setShowPopup(false);
    setShowSecondPopup(true);
  };

  const handleSecondPopupClose = () => {
    setShowSecondPopup(false);
    navigate("/Recom"); // Arahkan ke halaman Recom
  };

  return (
    <div className="consul-page-container">
      <Header />

      <div className="header-divider">
        <span className="header-divider-text">Konsultasi</span>
      </div>

      <div>
        <section className="consultation">
          <div className="chat-section">
            <div className="chat-box">
              <img src="assets/images/chat.png" alt="" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Type here..." />
              <div id="cam-button">
                <button type="button">
                  <img src="assets/images/cam.png" alt="Camera" />
                </button>
              </div>
              <button type="button">
                <img src="assets/images/send.png" alt="Send" />
              </button>
            </div>
          </div>

          {/* Expert Profile Section */}
          <aside className="profile-section">
            <div className="doctor-profile">
              <h1>Profil Dokter</h1>
              {expert ? (
                <div>
                  <img src={expert.imageUrl} alt={expert.name} />
                  <h2 className='text-[#4A4A4A] text-[24px] font-bold'>{expert.name}</h2>
                  <h6>{expert.specialty}</h6>
                  <p>{expert.description}</p>
                </div>
              ) : (
                <p>Dokter belum dipilih. Silakan pilih dokter di halaman sebelumnya.</p>
              )}
            </div>

            <div className="skin-problems">
              <h1>Masalah Kulit</h1>
              <form>
                <label htmlFor="skin-type">Tipe Kulit</label>
                <select
                  id="skin-type"
                  value={localSkinType}
                  onChange={(e) => setLocalSkinType(e.target.value)}
                >
                  <option value="">Pilih jenis kulit...</option>
                  <option value="Normal">Kulit Normal</option>
                  <option value="Berminyak">Kulit Berminyak</option>
                  <option value="Kering">Kulit Kering</option>
                  <option value="Sensitif">Kulit Sensitif</option>
                  <option value="Kombinasi">Kulit Kombinasi</option>
                </select>

                <label htmlFor="skin-problem">Masalah Kulit</label>
                <select
                  id="skin-problem"
                  value={localSkinProblem}
                  onChange={(e) => setLocalSkinProblem(e.target.value)}
                >
                  <option value="">Pilih masalah kulit...</option>
                  <option value="Jerawat & Komedo">Jerawat & Komedo</option>
                  <option value="Penuaan">Penuaan</option>
                  <option value="Pigmentasi">Pigmentasi</option>
                  <option value="Kering & Sensitif">Kering & Sensitif</option>
                  <option value="Berminyak">Berminyak</option>
                  <option value="Kelamin">Kelamin</option>
                  <option value="Warna kulit">Warna Kulit</option>
                </select>

                <label htmlFor="age">Usia</label>
                <input
                  type="number"
                  id="age"
                  value={localAge}
                  onChange={(e) => setLocalAge(e.target.value)}
                />

                <button type="button" onClick={togglePopup}>
                  Rekomendasi
                </button>
              </form>
            </div>
          </aside>
        </section>
      </div>

      {/* Review Pop-up */}
      {showPopup && (
        <div id="reviewPopup" className="popup-overlay-unggah">
          <div className="popup-content-unggah">
            <div className="popup-header">Berikan ulasan Dokter lalu dapatkan koin</div>
            <div className="stars" id="starRating">
              <input type="radio" name="star" id="star1" />
              <label htmlFor="star1">★</label>
              <input type="radio" name="star" id="star2" />
              <label htmlFor="star2">★</label>
              <input type="radio" name="star" id="star3" />
              <label htmlFor="star3">★</label>
              <input type="radio" name="star" id="star4" />
              <label htmlFor="star4">★</label>
              <input type="radio" name="star" id="star5" />
              <label htmlFor="star5">★</label>
            </div>
            <div className="tulis">
              <p>Tuliskan ulasan Anda (opsional*)</p>
            </div>
            <div>
              <textarea
                className="textarea"
                placeholder="Tambahkan ulasan tertulis jika anda ingin memberikan masukan"
              ></textarea>
            </div>
            <div className="popup-button-container">
              <button className="unggah-btn" onClick={handleUploadClick}>
                Unggah
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Pop-up */}
      {showSecondPopup && (
        <div id="secondPopup" className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">Ulasan berhasil disimpan</div>
            <p className="selamat">SELAMAT!!</p>
            <p className="koin">500 KOIN</p>
            <p className="liat">Koin dapat dilihat pada halaman profil.</p>
            <div className="popup-button-container">
              <button className="rekom-btn" onClick={handleSecondPopupClose}>
                Rekomendasi
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="footer-separator"></div>
      <Footer />
    </div>
  );
};

export default Consul;
