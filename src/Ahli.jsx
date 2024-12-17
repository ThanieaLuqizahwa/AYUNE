import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/pilihahli.css";

const Ahli = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const experts = [
    { id: 1, name: "dr. Syarif", specialty: "Anti-aging", price: 45000, status: "offline", experience: 3, rating: 4.9, imageUrl: "assets/images/expert1.png", 
      description: "Beliau adalah dokter ahli dalam perawatan anti-aging, fokus pada pencegahan dan perbaikan tanda-tanda penuaan kulit dengan teknologi terkini seperti perawatan laser, filler, dan terapi regenerasi." }, 

    { id: 2, name: "dr. Emy Kusumaningsih, Sp.DV", specialty: "Dermatovenereologi Estetika", price: 75000, status: "online", experience: 7, rating: 5.0, imageUrl: "assets/images/expert2.png", 
      description: "Beliau adalah dokter spesialis Dermatovenereologi Estetika yang menangani masalah kulit, kelamin, dan perawatan estetika. Beliau ahli dalam mengatasi jerawat, penuaan dini, vitiligo, serta melakukan prosedur seperti laser dan filler untuk memperbaiki penampilan kulit dengan aman dan efektif." }, 

    { id: 3, name: "dr. Michael Jackson Sp.KK", specialty: "Kulit & Kelamin", price: 55000, status: "offline", experience: 6, rating: 4.7, imageUrl: "assets/images/expert3.png", 
      description: "Beliau adalah dokter spesialis yang menangani berbagai masalah kulit dan kelamin, termasuk infeksi, alergi, dan gangguan kulit lainnya, dengan pendekatan medis yang aman dan efektif." }, 

    { id: 4, name: "dr. Anatasya, Sp.KK", specialty: "Kulit Kusam, Pigmentasi", price: 35000, status: "online", experience: 3, rating: 4.8, imageUrl: "assets/images/expert4.png", 
      description: "Beliau adalah dokter ahli dalam menangani kulit kusam dan penuaan dini dengan perawatan yang menyegarkan dan memperbaiki elastisitas kulit, menggunakan teknik seperti mikrodermabrasi, laser, dan terapi peremajaan." }, 

    { id: 5, name: "dr. Clara, Sp.KK", specialty: "Kulit Sensitif, Alergi", price: 65000, status: "online", experience: 4, rating: 5.0, imageUrl: "assets/images/expert5.png", 
      description: "Beliau adalah dokter ahli dalam menangani kulit sensitif dan alergi dengan perawatan yang lembut dan efektif, termasuk pengobatan topikal dan saran perawatan kulit yang tepat untuk mengurangi iritasi." }, 

    { id: 6, name: "dr. Hana, Sp.KK", specialty: "Kulit Ibu Hamil, Stretch Mark", price: 50000, status: "offline", experience: 3, rating: 4.8, imageUrl: "assets/images/expert6.png", 
      description: "Beliau adalah dokter ahli yang berpengalaman dalam perawatan kulit ibu hamil, termasuk penanganan stretch mark dan masalah kulit lainnya dengan solusi yang aman dan sesuai untuk kondisi tubuh selama kehamilan." }, 

    { id: 7, name: "dr. Citra, Sp.KK", specialty: "Jerawat, Bekas Jerawat", price: 55000, status: "offline", experience: 4, rating: 4.8, imageUrl: "assets/images/expert7.png", 
      description: "Beliau adalah dokter ahli yang berpengalan mengatasi masalah jerawat dan bekas jerawat dengan pendekatan medis yang tepat, termasuk perawatan laser, peeling, dan terapi topikal untuk hasil yang maksimal." }, 

    { id: 8, name: "dr. Erlina, Sp.KK", specialty: "Spesialis Keloid,  Bekas  Luka", price: 80000, status: "offline", experience: 2, rating: 4.9, imageUrl: "assets/images/expert8.png", 
      description: "Beliau adalah dokter ahli dalam penanganan keloid dan bekas luka, menggunakan teknik medis terkini seperti terapi laser, injeksi steriod, dan perawatan topikal untuk mengurangi penampilan bekas luka dan mencegah pembentukan keloid." }, 

    { id: 9, name: "dr. Andriana, Sp.KK", specialty: "Kulit Kusam & Penuaan Dini", price: 60000, status: "online", experience: 5, rating: 4.9, imageUrl: "assets/images/expert9.png", 
      description: "Beliau adalah dokter ahli dalam menangani kulit kusam dan penuaan dini dengan perawatan yang menyegarkan dan memperbaiki elastisitas kulit, menggunakan teknik seperti mikrodermabrasi, laser, dan terapi peremajaan." },

  ];

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredExperts = experts.filter((expert) =>
    expert.name.toLowerCase().includes(searchTerm) || expert.specialty.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="ahli-page-container">
      <Header />
      <main>
        <div className="title">
          <h1>Pilih Ahli</h1>
          <input
            type="text"
            placeholder="Temukan ahli untuk mengetahui kondisi kulit anda..."
            onChange={handleSearchInput}
            className="search-input"
          />
        </div>

        <div className="sub-title">
          <div className="sub-title-h2">
            <h2>Rekomendasi Ahli</h2>
          </div>
          <div className="sub-title-h4">
            <h4>Pilih ahli kulit yang sesuai dengan kebutuhan anda</h4>
          </div>
        </div>

        <div className="all-cards">
          {filteredExperts.map((expert) => (
            expert.status === "online" ? (
              <Link
                to="/rincianbayar"
                state={{ expert }}
                key={expert.id}
                className="card-link"
              >
                <div className="expert-card">
                  <img src={expert.imageUrl} alt={expert.name} className="expert-photo" />
                  <div className="expert-info">
                    <h3>{expert.name}</h3>
                    <p className="specialty">Spesialis {expert.specialty}</p>
                    <div className="card-details">
                      <div className="experience">
                        <span>📅</span>
                        <span>{expert.experience} Tahun</span>
                      </div>
                      <div className="rating">
                        <span>⭐</span>
                        <span>{expert.rating}/5.0</span>
                      </div>
                    </div>
                    <div className="availability">Tersedia senin - sabtu 09:00 - 20:00</div>
                    <p className="price">Rp {expert.price.toLocaleString()}</p>
                    <button className={`status ${expert.status}`}>Aktif</button>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={expert.id} className="expert-card disabled-card">
                <img src={expert.imageUrl} alt={expert.name} className="expert-photo" />
                <div className="expert-info">
                  <h3>{expert.name}</h3>
                  <p className="specialty">Spesialis {expert.specialty}</p>
                  <div className="card-details">
                    <div className="experience">
                      <span>📅</span>
                      <span>{expert.experience} Tahun</span>
                    </div>
                    <div className="rating">
                      <span>⭐</span>
                      <span>{expert.rating}/5.0</span>
                    </div>
                  </div>
                  <div className="availability">Tersedia senin - sabtu 09:00 - 20:00</div>
                  <p className="price">Rp {expert.price.toLocaleString()}</p>
                  <button className={`status ${expert.status}`}>Tidak Aktif</button>
                </div>
              </div>
            )
          ))}
        </div>
      </main>

      <div className="footer-separator"></div>
      <Footer />
    </div>
  );
};

export default Ahli;
