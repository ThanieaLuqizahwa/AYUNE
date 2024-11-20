import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import { TiStar } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const DeskripsiProduk = () => {
  return (
    <div className="profile-page">
      <header>
        <div className="logo">
          <img src="/assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="/Produk">PRODUK</Link></li>
            <li><Link to="/consul">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>
      <div className='space-y-[30px] bg-white'>
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
          </div>
        </section>
        {/* Section Detail Produk */}
        <section>
          <div className='grid grid-cols-2 gap-y-[10px] px-[130px] py-[40px] bg-white'>
            <div>
                <div className='flex items-center justify-center'>
                    <img src="/assets/images/senkadetail.png" alt="SENKA" />
                </div>
                <p className='text-center font-bold text-[#3B3B3B] text-[20px]'>Kisaran Harga</p>
                <p className='text-center text-[12px]'>Rp72.000 - Rp80.000</p>
            </div>
            <div className='space-y-[21px]'>
                <div className='text-[#3B3B3B]'>
                    <p className='text-[40px]'><span className='font-bold'>SENKA - </span>Perfect Whip Berry Brihght</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Deskripsi</p>
                    <p className='text-[16px] text-justify'>Facial foam terbaru dari Senka yang dapat membuat kulit wajahmu bersih, lembap, dan tampak cerah merona alami! Diformulasikan dengan Mixed Berries (Cranberry & Raspberry) yang kaya antioksidan, Perfect Whip Berry Bright dapat membuat kulit wajah tampak cerah merona (healthy blush). Selain itu, kandungan Japanese Yoshino Cherry Extract bisa membantu deep cleansing sel kulit mati dan kotoran secara lembut. Cocok digunakan bagi kulit normal hingga berminyak yang kusam, kering, dan terasa kasar.</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Komposisi</p>
                    <p className='text-[16px] text-justify'>Water (Aqua), Glycerin, Stearic Acid, Myristic Acid, Potassium Hyfroxide, Lauric Acid, PEG-8, Glyceryl Stearate SE, Sodium Methyl Cocoyl Taurate, Polyquaternium-7, Fragrance, Acrylates Copolymer, Disodium EDTA, Sodium Citrate, Algin, Sodium Benzoate, Sodium Metabisulfite, Phenoxyethanol, Caprylyl Glycol, Chondrus Crispus, Iron Oxides, Sodium Lauryl Sulfate, Clacium Chloride, RED 30, PEG/PPG-14/7 Dimethyl Ether, Vaccinium Macrocarpon (Cranberry) Fruit Extract, Butylene Glycol, Sericin, Lauryl Glucoside, Potassium Sorbate, Citric Acid, Prunus Yedoensis Leaf Extract, Sodium Acetylated Hyaluronate, Sodium Hyaluronate, Sorbic Acid, Glycyrrhiza Glabra (Licorice) Root Extract, Rubus Idaeus (Raspberry) Fruit Extract.</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Cara Pemakaian</p>
                    <ol>
                        <li>1. Cuci tangan hingga bersih dan keluarkan Senka Perfect Whip kurang lebih 2 cm di atas permukaan tangan</li>
                        <li>2. Beri air kurang lebih sebanyak 1 sendok teh</li>
                        <li>3. Buat Gerakan melingkar 0 untuk menghasilkan foam yang tebal dan padat</li>
                        <li>4. Usapkan dan gunakan foam untuk cuci muka</li>
                    </ol>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Link Pembelian</p>
                    <div className='flex items-center justify-start gap-[8px]'>
                        <img className='w-[76px] h-[76px]' src="/assets/images/shopee.png" alt="shopee" />
                        <img className='w-[66px] h-[66px]' src="/assets/images/tokopedia.png" alt="tokopedia" />

                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className='bg-[#E3F2ED] py-[21px] flex justify-center relative'>
          <div className=' px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[20px] font-bold text-center mb-[7px]'>Ulasan</p>
            <div className='flex gap-[10px] items-center justify-center'>
                <div className='flex gap-[4.34px] items-center'>
                    <img src="/assets/images/1b.png" alt="1b" />
                    <img src="/assets/images/2b.png" alt="2b" />
                    <img src="/assets/images/3b.png" alt="3b" />
                    <img src="/assets/images/4b.png" alt="4b" />
                    <img src="/assets/images/5b.png" alt="5b" />

                </div>
                <p className='font-bold text-[24.24px]'>4.7 / 5</p>
            </div>
          </div>
            <button className='px-[11px] bg-[#147A63] text-white font-bold rounded-full w-[180px] py-[5px] text-[20px] absolute right-[120px] top-[37px]'>Berikan Ulasan</button>
        </section>
        <section className='px-[121px] flex items-center justify-center pb-[18px]'>
            <div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/expert6.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Miranda Bella</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>4</p>
                                </div>
                                <p className='text-[10px]'>10/10/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>28</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kering</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Sangat Kering, Sensitif</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Busanya banyak dan lembut bgt jd bikin mood buat cuci muka 🥰 wangi buahnya seger, setelah pakai wajah jd lembab dan gabikin kering ketarik gt 💯
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil1.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil1" />
                        <img src="/assets/images/imagecetaphil2.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil2" />
                        <img src="/assets/images/imagecetaphil3.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil3" />

                    </div>
                </div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/expert6.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Ariana Joe</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>5</p>

                                </div>
                                <p className='text-[10px]'>01/10/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>19</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kering</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Sangat Kering</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Bikin cerahan banget, jerawat yg aktif dan meradang jadi kempes dalam semalam, teksturnya lembut banget, tapi untuk aku di kulit yang kombinasi ini bikin beberapa area jadi kering tp overall baguss bangett sihh karna tinggal lanjut skincarean aja deh biar kulitnya moist lagii
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil4.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil4" />

                    </div>
                </div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/expert6.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Sandrina</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>5</p>
                                </div>
                                <p className='text-[10px]'>27/09/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>19</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kombinasi</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Sensitif</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Facial foam dari Senka yang ada kandungan mixed berries yang kaya akan antioksidan, saat pakai facial foam ini dia punya foam yang lembut banget di kulit, busanya juga banyak, ada sedikit aroma tapi aromanya enak, dan facial foam ini meresap banget ke kulit bikin kulit lebih cerah, sehat dan lembab
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil5.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil5" />

                    </div>
                </div>
                <div className='flex items-center justify-center gap-[17px]'>
                    <FaChevronLeft className='text-xl' />
                    <div className='flex gap-[7px]'>
                    <p className="flex items-center justify-center rounded-full bg-[#147A63] text-white text-[24px] w-[50px] h-[50px] font-bold">
                        1
                    </p>
                    <p className="flex items-center justify-center rounded-full bg-[#E3F2ED] text-black text-[24px] w-[50px] h-[50px] font-bold">
                        2
                    </p>

                    </div>
                    <FaChevronRight className='text-xl' />
                </div>
            </div>
        </section>
      </div>

      <footer className="aboutus-footer">
        <div className="footer-separator"></div>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/assets/images/logobesar.svg" alt="Logo Ayune" />
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
                <a href="#"><img src="/assets/images/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="/assets/images/twt.png" alt="Twitter" /></a>
                <a href="#"><img src="/assets/images/yt.png" alt="YouTube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©AYUNNE, 2024. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  )
}

export default DeskripsiProduk