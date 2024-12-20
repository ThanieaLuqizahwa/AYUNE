import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './file_css/Index.css';
import Signup from './signup.jsx';
import AboutUs from './AboutUs.jsx';
import HomeAfterLogin from './HomeAfterLogin.jsx';
import HomeBeforeLogin from './HomeBeforeLogin.jsx';
import Login from './Login.jsx';
import AboutUs_Login from './AboutUs_Login.jsx';
import ForgotPass from './forgotpass.jsx';
import ResetPassword from './Resetpass.jsx';
import Profil from './profil.jsx';
import Ahli from './Ahli.jsx';
import Opsibayar from './Opsibayar.jsx';
import Rincianbayar from './rincianbayar.jsx';
import QR from './qr.jsx';
import VA from './va.jsx';
import Consul from './consul.jsx';
import Ulasan_Ahli from './ulasan_ahli.jsx';
import Produk from './Produk.jsx';
import ProdukPembersih from './ProdukPembersih.jsx';
import DeskripsiProduk from './DeskripsiProduk.jsx';
import ProdukToner from './ProdukToner.jsx';
import ProdukPelembap from './ProdukPelembap.jsx';
import ProdukSerum from './ProdukSerum.jsx';
import ProdukSunscreen from './ProdukSunscreen.jsx';
import ProdukMasker from './ProdukMasker.jsx';
import Recom from './Recom.jsx';
import Ulasan_Produk from './ulasan_produk.jsx';
import DeskripsiProdukRecom from './DeskripsiProdukRecom.jsx';
import Profil_Edit from './profil_edit.jsx';
import { PaymentProvider } from './PaymentContext'; // Import PaymentProvider
import { SkinProblemProvider } from './context/SkinProblemContext.jsx'; // Import SkinProblemProvider
import Footer from './components/Footer.jsx';
import HeaderBeforeLogin from './components/HeaderBeforeLogin.jsx';
import HeaderAfterLogin from './components/HeaderAfterLogin.jsx';

const App = () => {
  return (
    <PaymentProvider>
      <SkinProblemProvider>
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/Ahli" element={<Ahli />} />
          <Route path="/HomeAfterLogin" element={<HomeAfterLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/AboutUs_Login" element={<AboutUs_Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/Produk/Toner" element={<ProdukToner />} />
          <Route path="/Produk/Pelembap" element={<ProdukPelembap />} />
          <Route path="/Produk/Serum" element={<ProdukSerum />} />
          <Route path="/Produk/Sunscreen" element={<ProdukSunscreen />} />
          <Route path="/Produk/Masker" element={<ProdukMasker />} />
          <Route path="/Produk/Pembersih" element={<ProdukPembersih />} />
          <Route path="/Produk/Pembersih/Deskripsi" element={<DeskripsiProduk />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/opsibayar" element={<Opsibayar />} />
          <Route path="/Rincianbayar" element={<Rincianbayar />} />
          <Route path="/qr" element={<QR />} />
          <Route path="/va" element={<VA />} />
          <Route path="/Consul" element={<Consul />} />
          <Route path="/ulasan_ahli" element={<Ulasan_Ahli />} />
          <Route path="/Recom" element={<Recom />} />
          <Route path="/ulasan_produk" element={<Ulasan_Produk />} />
          <Route path="/DeskripsiProdukRecom" element={<DeskripsiProdukRecom />} />
          <Route path="/profil_edit" element={<Profil_Edit />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/HeaderBeforeLogin" element={<HeaderBeforeLogin />} />
          <Route path="/HeaderAfterLogin" element={<HeaderAfterLogin />} />
        </Routes>
      </SkinProblemProvider>
    </PaymentProvider>
  );
};

export default App;
